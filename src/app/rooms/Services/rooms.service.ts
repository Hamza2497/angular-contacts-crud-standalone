import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { App_Service_Config } from '../../AppConfig/appconfig.service';

@Injectable({providedIn: 'root'})
export class RoomsService {

  roomList: RoomList[] = [{
    roomNumber: 101,
    roomType: 'Deluxe',
    amenities: 'AC, TV, WiFi',
    price: 100,
    photos: 'https://example.com/deluxe.jpg',
    checkinTime: new Date('2025-10-01T14:00:00'),
    checkoutTime: new Date('2025-10-02T12:00:00'),
    Rating: 4.5,
  },
  {
    roomNumber: 102,
    roomType: 'Suite',
    amenities: 'AC, TV, WiFi, Mini Bar',
    price: 200,
    photos: 'https://example.com/suite.jpg',
    checkinTime: new Date('2025-10-01T14:00:00'),
    checkoutTime: new Date('2025-10-02T12:00:00'),
    Rating: 3.8,
  },
  {
    roomNumber: 103,
    roomType: 'Standard',
    amenities: 'AC, TV',
    price: 80,
    photos: 'https://example.com/standard.jpg',
    checkinTime: new Date('2025-10-01T14:00:00'),
    checkoutTime: new Date('2025-10-02T12:00:00'),
    Rating: 4.1,
  },
  {
    roomNumber: 104,
    roomType: 'Luxury',
    amenities: 'AC, TV, WiFi, Mini Bar, Spa',
    price: 300,
    photos: 'https://example.com/luxury.jpg',
    checkinTime: new Date('2025-10-01T14:00:00'),
    checkoutTime: new Date('2025-10-02T12:00:00'),
    Rating: 5.0,
  }];

  constructor(@Inject(App_Service_Config) private Config: AppConfig) {
    console.log(this.Config.apiEndpoint);
    
  }



  getRooms(){
    return this.roomList;
  }
}
