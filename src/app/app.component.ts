import { Component } from '@angular/core';
import { RoomsComponent} from './rooms/rooms.component';
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";

@Component({
  standalone: true,
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ContainerComponent, RoomsComponent, EmployeeComponent]
})
export class AppComponent {

  title = 'hotelinventoryapp';

constructor() {}

}