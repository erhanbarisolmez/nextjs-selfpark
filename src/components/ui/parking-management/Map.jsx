'use client'
import { Button } from "@mui/material";
import {
  Autocomplete,
  GoogleMap,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import CardComponent from "../../CardComponent";
import AddParkContent from "./addParkContent";
import { useThemeHook } from "@/hooks/useThemeHook";

const Map =  ({

}) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchLngLat, setSearchLngLat] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [open, setOpen] = useState(false);
  const autocompleteRef = useRef(null);
  const [address, setAddress] = useState("");
  const {getModalStyles} = useThemeHook();
  const { modalCard, textColor} = getModalStyles();

  useEffect(() => {
    if (searchLngLat) {
      reverseGeocode(searchLngLat);
    }
  }, [searchLngLat]);

  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;

  // static lat and lng
  const center = { lat: 41.006611, lng: 28.665645 };
  // , 

  // handle place change on search
  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    setSelectedPlace(place);
    setSearchLngLat({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
    setCurrentLocation(null);
  };

  // get current location
  const handleGetLocationClick = () => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Lati",latitude)
          console.log("long",longitude)
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  // on map load
  const onMapLoad = (map) => {
    const controlDiv = document.createElement("div");
    const controlUI = document.createElement("div");
    controlUI.innerHTML = "Get Location";
    controlUI.style.backgroundColor = "white";
    controlUI.style.color = "black";
    controlUI.style.border = "2px solid #ccc";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginBottom = "22px";
    controlUI.style.textAlign = "center";
    controlUI.style.width = "100%";
    controlUI.style.padding = "8px 0";
    controlUI.addEventListener("click", handleGetLocationClick);
    controlDiv.appendChild(controlUI);

    // const centerControl = new window.google.maps.ControlPosition(
    //   window.google.maps.ControlPosition.TOP_CENTER,
    //   0,
    //   10
    // );

    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
      controlDiv
    );
  };
  const reverseGeocode = (latLng) => {
    const geocoder = new window.google.maps.Geocoder();
  
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          const address = results[0].formatted_address;
          console.log("Tıklanan yerin tam adresi:", address);
           setAddress(address);
           setOpen(true);
           console.log("adress",address)
        } else {
          console.log("Adres bulunamadı.");
        }
      } else {
        console.error("Geocode hatası:", status);
      }
    });
  };

  const handleMapClick = (event) =>{
    const latLng = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }
   
    setSearchLngLat(latLng);
  
  }


  const handleOpenCard = () => {
    console.log(open);
    setOpen(!open);

  }

  return (

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
       
      <Button variant="text" onClick={handleOpenCard}>
        {open ? 'Geri' : 'İleri'}
      </Button> 

      {open &&(
        <CardComponent 
        header={"BİLGİ"} 
        content={`Lat: ${searchLngLat?.lat || ""}, Lng: ${searchLngLat?.lng || ""}`}
        children={<AddParkContent />} 
        sx={{backgroundColor:modalCard, color:textColor}}
        />
      )}

      
      {/* search component  */}

      {!open === true &&(
        <>
      <Autocomplete
        onLoad={(autocomplete) => {
          console.log("Autocomplete loaded:", autocomplete);
          autocompleteRef.current = autocomplete;
        }}
        onPlaceChanged={handlePlaceChanged}
        options={{ fields: ["address_components", "geometry", "name"] }}
      >
        <input type="text" placeholder="Search for a location"   value={`Lat: ${searchLngLat?.lat || ""}, Lng: ${searchLngLat?.lng || ""}`}/>
      </Autocomplete>

      {/* map component  */}
      <GoogleMap
        onDblClick={handleMapClick}
        zoom={currentLocation || selectedPlace ? 18 : 12}
        center={currentLocation || searchLngLat || center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "80%", height: "600px", margin: "auto" }}
        onLoad={onMapLoad}
      >
        {selectedPlace && <Marker position={searchLngLat} />}
        {currentLocation && <Marker position={currentLocation} />}
     
      </GoogleMap>
      </>
      )}
    </div>
  );
};

export default Map;