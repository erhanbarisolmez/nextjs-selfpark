import useRequestOptions from "@/utils/request/requestOptions";
import CreateParkRequest from "../models/park/request/createParkRequest";
import GetCreateParkResponse from "../models/park/response/getCreateParkResponse";

export default class ParkService {
  constructor(token) {
    this.api = process.env.NEXT_PUBLIC_API_BACKEND_URL;
    this.add = "/api/v1/parkInfo/add";
    this.delete = "/api/v1/parkInfo/delete";
    this.readAll = "/api/v1/parkInfo/getAll";
    this.readId = "/api/v1/parkInfo/getParkById";
    this.update = "/api/v1/parkInfo/update";
    this.token = token;
  }

  async add_park(parkData) {
    console.log("Add_park: ", parkData);
    let createParkRequest;
    let getCreateParkResponse;

    try {
       createParkRequest = new CreateParkRequest(
        
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
      console.log("request", createParkRequest);
      

      const requestOptions = useRequestOptions('PUT', '*/*', createParkRequest, this.token);
    
      const response = await fetch(
        `${this.api}${this.add}`,
        requestOptions
      );


      if (response.ok) {
        const data = await response.json();
        console.log("response: ", data);

        getCreateParkResponse = new GetCreateParkResponse(
            data.parkName,
            data.district,
            data.city,
            data.lat,
            data.lng,
            data.capacity,
            data.emptyCapacity,
            data.workHours,
            data.parkType,
            data.freeTime,
            data.isOpen,
            data.enable
          );
      return getCreateParkResponse;
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
  async read_park_all() {
    try {

      const requestOptions = useRequestOptions('GET', '*/*', undefined,this.token);
     
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

  async read_park_id(id) {

    try {

      const requestOptions  = useRequestOptions('GET', '*/*', undefined, this.token);
      const response = await fetch(`${this.api}${this.readId}/${id}`, requestOptions);

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


  async update_park(id, data) {
    try {
      const updatedData = {
        id: data.id,
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
      console.log("TOKEN UPDATE PARK", this.token);

      const requestOptions = useRequestOptions('PUT', 'application/json', updatedData, this.token);

      
      const response = await fetch(`${this.api}${this.update}`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        console.log("güncellenene data", result)
        return result;
      } else {
        console.log("Error update", response.status, response.statusText);
      }

    } catch (error) {
      console.error("Update error server: ", error)
    }
  }

  // service_management, components/ui/parking-management, listParkContent 
  async delete_park(parkId) {
 
    try {

      const requestOptions = useRequestOptions('DELETE','application/json', parkId, this.token);
      console.log("REQUEST TOKEN: ",this.token);

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


