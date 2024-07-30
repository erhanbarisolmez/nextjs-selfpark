export default class PersonnelAddRequest{
  constructor(
    parkName,
    firstName,
    lastName,
    email,
    phone,
    task,
    
  ){
    this.parkName = parkName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.task = task;
  }
}