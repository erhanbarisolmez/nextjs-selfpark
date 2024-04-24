
class Park {
  constructor() {
    this.api = process.env.NEXT_PUBLIC_API_FASTAPI_URL + "/park";
    this.add = "/create_park";
    this.delete = "/delete";
    this.read_all = "/read_park_all";
    this.read_id = "/read_park";
  }

  async addPark(parkData, token) {
    console.log("Adding park: ", token);
    try {
      console.log("ADD PARK: " + JSON.stringify(parkData));
      const requestOptions = {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(parkData),
      }
      const response = await fetch(
        `${this.api}${this.add}`,
        requestOptions
      );


      if (response.ok) {
        const data = await response.json();
        console.log(data)
        return data;
      } else {
        console.log("parking not added")
      }

    } catch (error) {
      console.error("Error parking not added: ", error)
    }

  }

  async read_park_all(data, token) {
    try {

      const requestOptions = {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      }

      const response = await fetch(`${this.api}${this.read_all}`, requestOptions);
      if (response.ok) {
        const parkings = await response.json()
        console.log(parkings);

        return parkings;
      } else {
        console.log("park not found");
      }

    } catch (error) {
      console.error("Error, Parking not Found: ", error);
    }
  }

  async read_park_id(id, token) {

    try {
      requestOptions = {
        method: "GET",
        headers: {
          "accept": "application/json",
          "Content-Type": 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(id)
      }
      const response = await fetch(`${this.api}${this.read_id}`, requestOptions);

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

  async update_park(token, id, data){
    try {
      requestOptions = {
        method:'PUT',
        headers: {
          'accept':'application/json',
          'Content-Type':'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      }

      const response = await fetch(`${this.api}${this.update_park}`, requestOptions);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      }else{
        console.log("Error update");
      }
      
    } catch (error) {
      console.error("Update error server", error)
    }
  }
  async deletePark(id, token) {
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
        `${this.api}${this.delete}/${id}`, requestOptions);

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


export default Park;