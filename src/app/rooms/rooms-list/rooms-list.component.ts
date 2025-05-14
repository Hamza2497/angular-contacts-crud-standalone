import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit{

@Input() rooms: RoomList[] = [];
@Output() selectRoom= new EventEmitter<RoomList>();

  ngOnInit(): void {}
}

