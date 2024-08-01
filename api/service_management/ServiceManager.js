import AuthenticateService from "../services/AuthenticateService";
import ParkService from "../services/ParkService";


export default class ServiceManager{
  
  constructor(){
    this.authService = new AuthenticateService();
    this.parkService = new ParkService();
    // this.personnelService = new PersonnelService();
  }
 
 
}


