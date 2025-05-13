import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent} from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RoomsComponent]
})
export class AppComponent {
  title = 'hotelinventoryapp';
}