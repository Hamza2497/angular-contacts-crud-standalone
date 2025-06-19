import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../Services/rooms.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HoverDirective } from '../../hover.directive';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'hinv-rooms-add',
  imports: [FormsModule, CommonModule, HoverDirective],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss'
})
export class RoomsAddComponent implements OnInit {

  room: RoomList = {
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0
  }

  successMessage: string = '';

  constructor(private roomService: RoomsService, private router: Router) { }

  ngOnInit(): void {
    // Initialization logic here
  }

  addRoom(roomsForm: NgForm){
    this.roomService.addRoom(this.room).subscribe((data) => {
      this.successMessage = `Room added successfully!`;
      roomsForm.resetForm();
    });
  }

  goBack(){
    this.router.navigate(['/rooms']);
  }
}
