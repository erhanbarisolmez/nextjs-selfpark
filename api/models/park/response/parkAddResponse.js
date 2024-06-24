export default class ParkAddResponse{
  
  constructor(parkName,district, city,lat,lng,capacity,emptyCapacity,workHours,parkType,freeTime,isOpen, enable ){
    this.parkName = parkName;
    this.district = district;
    this.city = city;
    this.lat = lat;
    this.lng = lng;
    this.capacity =capacity;
    this.emptyCapacity = emptyCapacity;
    this.workHours = workHours;
    this.parkType = parkType;
    this.freeTime = freeTime;
    this.isOpen = isOpen;
    this.enable = enable;
  }
}

