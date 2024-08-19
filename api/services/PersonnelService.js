
import useRequestOptions from "@/utils/request/requestOptions";
import CreatePersonnelRequest from "../models/personnel/request/createPersonnelRequest";
import UpdatePersonnelRequest from "../models/personnel/request/updatePersonnelRequest";
import GetPersonnelAddResponse from "../models/personnel/response/getAddPersonnelResponse";
import GetUpdatePersonnelResponse from "../models/personnel/response/getUpdatePersonnelResponse";

export default class PersonnelService {
  constructor(token) {
    this.api = process.env.NEXT_PUBLIC_API_BACKEND_URL;
    this.create = "/api/v1/personnel/add";
    this.read = "/api/v1/personnel/getAll";
    this.update = "/api/v1/personnel/update";
    this.delete = `/api/v1/personnel/delete`;
    this.token = token;
  }

  async addPersonnel(data) {
    let createPersonnelRequest;
    let getPersonnelAddResponse;
    try {
      createPersonnelRequest = new CreatePersonnelRequest(
        data.parkName,
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.task
      );
    
      const requestOptions = useRequestOptions('POST', 'application/json', createPersonnelRequest, this.token);
      const response = await fetch(`${this.api}${this.create}`, requestOptions);
      if (response.ok) {
        const result = await response.json();
        console.log("RESULT data: ", result);

          getPersonnelAddResponse = new GetPersonnelAddResponse(
            result.parkName,
            result.firstName,
            result.lastName,
            result.email,
            result.phone,
            result.task
          );

        return getPersonnelAddResponse;
      } else {
        const errorData = await response.text();
        console.error("Error:", errorData);
      }
    } catch (error) {
      console.error("Error personnel not added: ", error);
    }
  }

  async read_personnel_all(token) {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }

      const response = await fetch(`${this.api}${this.read}`, requestOptions);
      if (response.ok) {
        const result = await response.json();
        console.log("data: ", result);
        

        return result;

      } else {
        console.error("personnel not found");
      }

    } catch (error) {
      console.error("Error, Personnel not Found: ", error)
    }
  }

  async update_personnel(id, data) {
    let updatePersonnelRequest;
    let getUpdatePersonnelResponse;
    try {
      updatePersonnelRequest =  new UpdatePersonnelRequest(
        id,
        data.parkName,
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.task
       );

    const requestOptions = useRequestOptions("PUT", '*/*', updatePersonnelRequest, this.token );

    const response = await fetch(`${this.api}${this.update}`, requestOptions);

    if (response.ok) {
      try {
        const result = await response.json();
        getUpdatePersonnelResponse = new GetUpdatePersonnelResponse(
          result.id,
          result.parkName,
          result.firstName,
          result.lastName,
          result.email,
          result.phone,
          result.task
        );
        return getUpdatePersonnelResponse;
      } catch (error) {
        console.log("No Json Response");
        return null;
      }
     
    }else {
      console.log("Error update: ", response.status, response.statusText);
    }
    } catch (error) {
      console.error("Update error server: ", error);
    }
  }

  async delete_personnel(id){
    console.log("DELETE PERSONNEL ID:", id);
    try {
      const requestOptions = useRequestOptions("DELETE", "*/*", undefined, this.token ); 
      const response = await fetch(`${this.api}${this.delete}/${id}`, requestOptions);
      console.log("response: ", response);

      if (response.ok) {
        const result = await response.json();
        console.log("RESULT: ",result);
        return result;
      }else {
        console.log("Failed to delete the parking");
      }
    } catch (error) {
      console.error("Error personnel delete: ", error);
    }
  }



}
