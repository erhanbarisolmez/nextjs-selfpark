class Authenticate {
  constructor() {
    this.api = process.env.NEXT_PUBLIC_API_FASTAPI_URL;
    this.login = '/auth/token'
  }
  async loginUser(username, password) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          'username': username,
          'password': password
        })
      }

      const response = await fetch(
        `${this.api}${this.login}`,
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        const token = data.access_token;
        if (token) {
          window.location.href = "dashboard";
          console.log("Logged in: ", token);
        } else {
          console.log("Login failed:", response);
        }
      }
    } catch (error) {
      console.error("Error authenticating user:", error);
    }

  }

}

export default Authenticate;