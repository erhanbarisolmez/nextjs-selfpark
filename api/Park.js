
class Park {
  constructor() {
    this.api = process.env.NEXT_PUBLIC_API_FASTAPI_URL;
    this.add = "/api/v1/parkInfo/add";
    this.delete = "/api/v1/parkInfo/delete";
    this.read_all = "/api/v1/parkInfo/getAll";
    this.read_id = "/read_park";
    this.update = "/api/v1/parkInfo/update"
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
        console.log(data);
        console.log("New Token", token);
        return data;
      } else {
        console.log("parking not added")
      }

    } catch (error) {
      console.error("Error parking not added: ", error)
    }

  }

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

      const response = await fetch(`${this.api}${this.read_all}`, requestOptions);
      if (response.ok) {
        const data = await response.json()
        console.log(data);

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


  async update_park(id, data, token) {

    console.log("update_park: ", data)
    try {
     const updatedData = {
        ...data,
        id: data.id,
        parkName: data.parkName,
        lat: data.lat,
        lng: data.lng,
        capacity: data.capacity,
        emptyCapacity: data.emptyCapacity,
        workHours: data.workHours,
        parkType: data.parkType,
        freeTime: data.freeTime,
        district: data.district,
        isOpen: data.isOpen,
        city: data.city,
        enable: data.enable
      }

      const requestOptions = {
        method: 'PUT',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({updatedData})
      }

      const response = await fetch(`${this.api}${this.update}/${id}`, requestOptions);

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.log("Error update");
      }

    } catch (error) {
      console.error("Update error server: ", error)
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