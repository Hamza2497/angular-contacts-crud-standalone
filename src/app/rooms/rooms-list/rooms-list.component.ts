import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

@Input() rooms: RoomList[] = [];

@Input() title: string = 'Room List';

@Output() selectRoom= new EventEmitter<RoomList>();


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
  console.log('onDestroy called');
}

  constructor() {}
}

