export default class UpdatePersonnelRequest{
  constructor(id, parkName, firstName, lastName,email,phone,task){
    this.id = id,
    this.parkName = parkName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.task = task;
  }
}