import AuthenticateRequest from "../models/auth/request/AuthenticateRequest";
import AuthenticateResponse, { User } from "../models/auth/response/AuthenticateResponse";

class AuthenticateService {
  constructor() {
    this.api = process.env.NEXT_PUBLIC_API_BACKEND_URL;
    this.login = '/api/v1/auth/authenticate',
    this.tokenExp = '/api/v1/auth/isTokenExpired'
  }

  // service_management, routes/autenticate, components/ui/login-card 
  async authenticate(email, password) {
    try {
      const authRequest = new AuthenticateRequest(email, password);
      const requestOptions = {
        method: 'POST',
        headers: {
          // 'accept': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded'
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(authRequest)
      }

      console.log(email, password)

      const response = await fetch(
        `${this.api}${this.login}`,
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        const { message, status, token, user } = data;
        const authResponse = new AuthenticateResponse(
          message, status, token, new User(
            user.id, user.firstname, user.email, user.phone, user.registeredDate, user.role, user.username, user.authorities, user.accountNonLocked, user.credentialsNonExpired, user.enabled
          )
        );

        console.log("response: ", authResponse);

        if (authResponse.token) {
          localStorage.setItem("token", token);
          window.location.href = "dashboard";
        }

      }
    } catch (error) {
      console.error("Error authenticating user:", error);
    }
  }

  async tokenExpiredControl(token){
    const requestOptions = {
      method: 'POST',
      headers: {
        'accept':'*/*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({token})
    }
    try {
      const response = await fetch( `${this.api}${this.tokenExp}`, requestOptions);
      if (response.ok) {
        const data = await response.json();
          return data;
        }else{
          return false;
        }
    } catch (error) {
      console.error("Error during token validation", error);
      return false;
    }
    }

  }



export default AuthenticateService;