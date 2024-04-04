
class Park{
  constructor(){
    this.api = process.env.NEXT_PUBLIC_API_FASTAPI_URL;
    this.add = "/park/create_park"
  }

  async addPark(modal){
    try {
      const requestOptions = {
        method:'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          modal
        })
      }
  
      const response = await fetch(
        `${this.api}${this.add}`,
        requestOptions
      );
  
      if (response.ok) {
        const data = await response.json();
        const token = data.access_token;
        // ..
        console.log(data)
      }else{
        console.log("parking not added")
      }
      
    } catch (error) {
      console.error("Error parking not added: ", error)
    }
  
  }
}


export default Park;