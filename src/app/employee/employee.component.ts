import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/Services/rooms.service';

@Component({
  standalone: true,
  selector: 'hinv-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: []
})
export class EmployeeComponent {

  constructor(private roomsService: RoomsService) {}

  empName: string = 'John';



}
