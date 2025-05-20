import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './Services/rooms.service';

@Component({
  standalone: true,
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  imports: [CommonModule, RoomsListComponent, HeaderComponent]
})
export class RoomsComponent implements OnInit, AfterViewInit {

numberOfRooms=10;
hiderooms=true;

rooms: Room = {
  totalRooms: 20,
  availableRooms: 10,
  bookedRooms: 5,
}

roomList: RoomList [] = [];

@ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;

constructor(private roomsService: RoomsService) {}

ngOnInit(): void {
  this.roomList = this.roomsService.getRooms();
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
