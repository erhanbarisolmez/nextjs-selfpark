import ParkAddRequest from "../models/park/request/parkAddRequest";
import ParkAddResponse from "../models/park/response/parkAddResponse";

export default class ParkService {
  constructor() {
    this.api = process.env.NEXT_PUBLIC_API_BACKEND_URL;
    this.add = "/api/v1/parkInfo/add";
    this.delete = "/api/v1/parkInfo/delete";
    this.readAll = "/api/v1/parkInfo/getAll";
    this.readId = "/read_park";
    this.update = "/api/v1/parkInfo/update";
  }

  async add_park(parkData, token) {
    console.log("Add_park: ", parkData);
    let parkAddResponse;
    let parkAddRequest;
    try {
       parkAddRequest = new ParkAddRequest(
        
          parkData.parkName,
          parkData.district,
          parkData.city,
          parkData.lat,
          parkData.lng,
          parkData.capacity,
          parkData.emptyCapacity,
          parkData.workHours,
          parkData.parkType,
          parkData.freeTime,
          parkData.isOpen,
          parkData.enable
      );

      console.log("request", parkAddRequest);
      
      const requestOptions = {
        method: 'PUT',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(parkAddRequest)
      }
      const response = await fetch(
        `${this.api}${this.add}`,
        requestOptions
      );


      if (response.ok) {
        const data = await response.json();
        console.log("dönen data", data);

        
        if (data === true){
          parkAddResponse = new ParkAddResponse(
            parkData.parkName,
            parkData.district,
            parkData.city,
            parkData.lat,
            parkData.lng,
            parkData.capacity,
            parkData.emptyCapacity,
            parkData.workHours,
            parkData.parkType,
            parkData.freeTime,
            parkData.isOpen,
            parkData.enable
  
          );
        }else {
          console.error("Unexpected response data:", data);
        }
   
        console.log("response", parkAddResponse);
        return parkAddResponse;
      } else {
        console.log("parking not added")
        const errorData = await response.text();
        console.error("Error:", errorData);
      }
    } catch (error) {
      console.error("Error parking not added: ", error)
    }

  }

  // service_management, components/ui/parking-management, listParkContent 
  async read_park_all(token) {
    try {

      const requestOptions = {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }

      const response = await fetch(`${this.api}${this.readAll}`, requestOptions);
      if (response.ok) {
        const data = await response.json()
        console.log("read_park_all data: ", data);

        return data;
      } else {
        console.log("park not found");
      }

    } catch (error) {
      console.error("Error, Parking not Found: ", error);
    }
  }

  async read_park_id(id, token) {

    try {
      const requestOptions = {
        method: "GET",
        headers: {
          "accept": "application/json",
          "Content-Type": 'application/json',
          "Authorization": `Bearer ${token}`
        },
      }
      const response = await fetch(`${this.api}${this.readAll}`, requestOptions);

      if (response.ok) {
        const park = await response.json();
        console.log(park);
        return park;
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("Error park: ", error)
    }

  }


  async update_park(id, data, token) {
    console.log("Update Park Token: ", token)

    try {
      const updatedData = {
        id: id,
        parkName: data.parkName,
        district: data.district,
        city: data.city,
        lat: data.lat,
        lng: data.lng,
        capacity: data.capacity,
        emptyCapacity: data.emptyCapacity,
        workHours: data.workHours,
        parkType: data.parkType,
        freeTime: data.freeTime,
        isOpen: data.isOpen,
        enable: data.enable
      }
      console.log("Updated Data: ", updatedData);

      const requestOptions = {
        method: 'PUT',
        headers: {
          'accept': '*/*',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'

        },
        body: JSON.stringify(
          updatedData
        )
      }
      console.log("body:", requestOptions.body)
      const response = await fetch(`${this.api}${this.update}`, requestOptions);

      if (response.ok) {
        const updatedData = await response.json();
        console.log("güncellenene data", updatedData)
        return updatedData;
      } else {
        console.log("Error update", response.status, response.statusText);
      }

    } catch (error) {
      console.error("Update error server: ", error)
    }
  }

  // service_management, components/ui/parking-management, listParkContent 
  async delete_park(id, token) {
    console.log(id);
    console.log(token);
    try {
      const requestOptions = {
        method: "DELETE",
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(id)
      }

      const response = await fetch(
        `${this.api}${this.delete}`, requestOptions);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        console.log("Failed to delete the parking");
      }

    } catch (error) {
      console.error("Error parking delete : ", error)
    }

  }
}


