export default class AuthenticateResponse{
  constructor(message, status, token, user){
    this.message = message;
    this.status = status;
    this.token = token;
    this.user = user;
  }
}

export class User{
  constructor(id, firstName, lastName, email, phone, registeredDate, role, username, authorities, accountNonExpired, accountNonLocked, credentialsNonExpired, enabled){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.registeredDate = registeredDate;
    this.role = role;
    this.username = username;
    this.authorities = authorities;
    this.accountNonExpired = accountNonExpired;
    this.accountNonLocked = accountNonLocked;
    this.credentialsNonExpired = credentialsNonExpired;
    this.enabled = enabled;
  }
}



