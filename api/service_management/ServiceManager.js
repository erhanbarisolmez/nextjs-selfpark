import AuthenticateService from "../services/AuthenticateService";
import ParkService from "../services/ParkService";
import PersonnelService from "../services/PersonnelService";

export default class ServiceManager{
  
  constructor(token){
    this.authService = new AuthenticateService();
    this.parkService = new ParkService(token);
    this.personnelService = new PersonnelService(token);

  }
 
 
}


