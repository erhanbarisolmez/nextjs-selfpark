class Camera{
  
  constructor(){
    this.api = process.env.NEXT_PUBLIC_API_FASTAPI_URL;
    this.open = '/camera/open'
  }

  async startCamera(){
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'accept' : 'application/json',
          'Content-Type': 'application/json',
        }
       }
       const device = 0;
       const response = await fetch(`${this.api}${this.open}/${device}`, requestOptions);
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