import jwt_decode from 'jsonwebtoken/decode'

class TokenManager{
  constructor(){
    this.accessTokenKey = 'access_token';
    this.refreshTokenKey = 'refresh_token';
  }

  isAccessTokenValid(){
    const accessToken = localStorage.getItem(this.accessTokenKey);
    if(!accessToken) return false;

    const decodedToken = jwt_decode(accessToken);
    const expirationTime = decodedToken.exp;
    const currentTime = Date.now() / 1000; 
    return expirationTime > currentTime;
  }

  async refreshAccessToken(){
    const refreshToken = localStorage.getItem(this.refreshTokenKey);
    if(!refreshToken) return null;

    try {
      const requestOptions = {
        method: 'POST',
        headers:{
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh_token: refreshToken })
      }
      const response = await fetch('/auth/token:', requestOptions);

      if(response.ok){
        const data = await response.json();
        localStorage.setItem(this.accessTokenKey, data.accessToken);
        return data.access_token; 
      } else{
        console.error('Failed to refresh access token: ', response);
        return null;
      }
      
    } catch (error) {
      console.error('Error refreshing access token: ', error);
      return null;
    }
  }
}

export default TokenManager;