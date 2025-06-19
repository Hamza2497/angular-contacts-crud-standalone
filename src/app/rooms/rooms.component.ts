import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './Services/rooms.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  imports: [CommonModule, RoomsListComponent, HeaderComponent, RouterModule]
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
  this.roomsService.getRooms().subscribe((rooms: RoomList[]) => {
    this.roomList = rooms;
  });
}

onRoomSelected(room: any): void {
    console.log('Selected room:', room);
}

  ngAfterViewInit(): void {
  console.log(this.headerComponent);
  }

// addRoom(){
//   this.router.navigate(['rooms', 'add']);
// }

editRoom(){
    const room: RoomList = {
    roomNumber: '103',
    roomType: 'Family',
    amenities: 'AC, TV, WiFi, Kitchen',
    price: 150,
    photos: 'https://example.com/family.jpg',
    checkinTime: new Date('2025-10-01T14:00:00'),
    checkoutTime: new Date('2025-10-02T12:00:00'),
    rating: 4.2,
  }
  this.roomsService.editRoom(room).subscribe((data) => {
    const index = this.roomList.findIndex(r => r.roomNumber === room.roomNumber);
    if (index !== -1) {
      this.roomList[index] = data;
      this.roomList = [...this.roomList];
    }
    console.log('Room edited:', data);
  });
}

deleteRoom(roomNumber: string){
  this.roomsService.deleteRoom(roomNumber).subscribe(() => {
    this.roomList = this.roomList.filter(room => room.roomNumber !== roomNumber);
    console.log('Room deleted:', roomNumber);
  });
}

  toggle(){
this.hiderooms=!this.hiderooms;
}

}
