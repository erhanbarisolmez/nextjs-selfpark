// import jwt_decode from 'jsonwebtoken/decode';
import jwt_decode from 'jsonwebtoken/decode';
class Authenticate {
  constructor() {
    this.api = process.env.NEXT_PUBLIC_API_FASTAPI_URL;
    this.login = '/api/v1/auth/authenticate'
  }
  async loginUser(email, password) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          // 'accept': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded'
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({
          'email': email,
          'password': password
        })
      }
  
      console.log(email, password)

      const response = await fetch(
        `${this.api}${this.login}`,
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
  
        if(token){
          localStorage.setItem("token", token);
          window.location.href = "dashboard";
        }
        
      }
    } catch (error) {
      console.error("Error authenticating user:", error);
    }
  }

}

export default Authenticate;