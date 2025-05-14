import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  imports: [CommonModule, RoomsListComponent, HeaderComponent]
})
export class RoomsComponent implements OnInit, AfterViewInit {

numberOfRooms=10;
hiderooms=false;

rooms: Room = {
  totalRooms: 20,
  availableRooms: 10,
  bookedRooms: 5,
}

roomList: RoomList [] = [];

@ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;

constructor() {}

ngOnInit(): void {
  console.log(this.headerComponent);
  this.roomList= [{
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
}
];
}

onRoomSelected(room: any): void {
    console.log('Selected room:', room);
}

  ngAfterViewInit(): void {
  console.log(this.headerComponent);
  }

addRoom(){
  const room: RoomList = {
    roomNumber: 105,
    roomType: 'Family',
    amenities: 'AC, TV, WiFi, Kitchen',
    price: 150,
    photos: 'https://example.com/family.jpg',
    checkinTime: new Date('2025-10-01T14:00:00'),
    checkoutTime: new Date('2025-10-02T12:00:00'),
    Rating: 4.2,
  };
    this.roomList = [...this.roomList, room];
}

  toggle(){
this.hiderooms=!this.hiderooms;
}

}
