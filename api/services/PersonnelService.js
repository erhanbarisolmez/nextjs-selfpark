import PersonnelAddRequest from "../models/personnel/request/personnelAddRequest";
import UpdatePersonnelRequest from "../models/personnel/request/updatePersonnelRequest";
import PersonnelAddResponse from "../models/personnel/response/personnelAddResponse";

export default class PersonnelService {
  constructor() {
    this.api = process.env.NEXT_PUBLIC_API_BACKEND_URL;
    this.create = "/api/v1/personnel/add";
    this.read = "/api/v1/personnel/getAll";
    this.update = "/api/v1/personnel/update";
    this.delete = "/api/v1/personnel/delete";
  }

  async addPersonnel(data, token) {
    let personnelAddRequest;
    let personnelAddResponse;
    try {
      personnelAddRequest = new PersonnelAddRequest(
        data.parkName,
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.task
      );

      const requestOptions = {
        method: "POST",
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(personnelAddRequest)
      }
      const response = await fetch(`${this.api}${this.create}`, requestOptions);
      if (response.ok) {
        const result = await response.json();
        console.log("data: ", result);

        if (data == true) {
          personnelAddResponse = new PersonnelAddResponse(
            data.parkName,
            data.firstName,
            data.lastName,
            data.email,
            data.phone,
            data.task
          );
        } else {
          console.error("Unexpected response data:", result);
        }
        return personnelAddResponse;
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

  async update_personnel(id, data, token) {
    let updatePersonnelRequest;
    let getUpdatePersonnelResponse;
    try {
      updatePersonnelRequest =  new UpdatePersonnelRequest(
        data.id,
        data.parkName,
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.task
       );
    const requestOptions = {
      method: 'PUT',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(updatePersonnelRequest)
    }

    const response = await fetch(`${this.api}${this.update}`, requestOptions);

    if (response.ok) {
      const result = await response.json();
      console.log("data: ", result);
      return result;
    }else {
      console.log("Error update: ", response.status, response.statusText);
    }
    } catch (error) {
      console.error("Update error server: ", error);
    }
  }

  async deletePersonnel(id, token){
    try {
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(id)
      }

      const response = await fetch(`${this.delete}`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        return result;
      }else {
        console.log("Failed to delete the parking");
      }
    } catch (error) {
      console.error("Error personnel delete: ", error);
    }
  }

}
