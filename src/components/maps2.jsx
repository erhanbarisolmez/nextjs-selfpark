import { useLoadScript } from "@react-google-maps/api";
import { useEffect } from "react";

export const Maps2 = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  useEffect(() => {
    if (!isLoaded) return;

    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: -34.397, lng: 150.644 },
      mapTypeControl: false,
    });

    const geocoder = new window.google.maps.Geocoder();
    const marker = new window.google.maps.Marker({
      map,
    });

    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.placeholder = "Enter a location";

    const submitButton = document.createElement("input");
    submitButton.type = "button";
    submitButton.value = "Geocode";
    submitButton.classList.add("button", "button-primary");

    const clearButton = document.createElement("input");
    clearButton.type = "button";
    clearButton.value = "Clear";
    clearButton.classList.add("button", "button-secondary");

    const response = document.createElement("pre");
    response.id = "response";
    response.innerText = "";
    const responseDiv = document.createElement("div");
    responseDiv.id = "response-container";
    responseDiv.appendChild(response);

    const instructionsElement = document.createElement("p");
    instructionsElement.id = "instructions";
    instructionsElement.innerHTML =
      "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.";

    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputText);
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(submitButton);
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(clearButton);
    map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(instructionsElement);
    map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(responseDiv);

    map.addListener("click", (e) => {
      geocode({ location: e.latLng });
    });

    submitButton.addEventListener("click", () =>
      geocode({ address: inputText.value })
    );

    clearButton.addEventListener("click", () => {
      clear();
    });

    clear();

    function clear() {
      marker.setMap(null);
    }

    function geocode(request) {
      clear();
      geocoder.geocode(request, (results, status) => {
        if (status === "OK") {
          const { geometry } = results[0];
          map.setCenter(geometry.location);
          marker.setPosition(geometry.location);
          marker.setMap(map);
          response.innerText = JSON.stringify(results, null, 2);
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    }
  }, [isLoaded]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading....</div>;

  return <div id="map" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBbT3NskMuv8tiFXHJE7U_w9yNFjk-upgM" style={{ width: "100%", height: "600px" }}></div>;
};
