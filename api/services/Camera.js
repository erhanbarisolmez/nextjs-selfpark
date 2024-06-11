class Camera{
  
  constructor(){
    this.api = process.env.NEXT_PUBLIC_API_BACKEND_URL + "/camera";
    this.open = '/open';
    this.scan = '/scan';
  }
  async startScan(){
    try {
      const requestOptions = {
        method: 'GET',
        headers:{
          'accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }
      
      const response = await fetch(`${this.api}${this.scan}`, requestOptions)
      if (response.ok) {
        const data = await response.json()
        return data;
      }

      
    } catch (error) {
      console.error('Error, Device not found:', error)      
    }
  }
  async startCamera(ip_address){
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'accept' : 'application/json',
          'Content-Type': 'application/json',
        }
       }
  
       const response = await fetch(`${this.api}${this.open}/${ip_address}`, requestOptions);
       if (response.ok) {
        const data = await response.json()
        return data;
       } else{
        console.log("camera not found")
       }
    } catch (error) {
        console.error('Error, Camera not found:', error)      
    }
  }
}


export default Camera