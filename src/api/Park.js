
class Park {
  constructor() {
    this.api = process.env.NEXT_PUBLIC_API_FASTAPI_URL;
    this.add = "/park/create_park"
  }

  async addPark(parkData) {
    try {
      console.log("ADD PARK: "+ JSON.stringify(parkData));
      const requestOptions = {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'www-authenticate': `Bearer ${token}`
        },
        body:JSON.stringify(parkData),
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
}


export default Park;