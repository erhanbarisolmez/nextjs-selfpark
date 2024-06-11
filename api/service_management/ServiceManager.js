import AuthenticateService from "../services/AuthenticateService";


export default class ServiceManager{
  
  constructor(){
    this.authService = new AuthenticateService();
  }
 
 
}


