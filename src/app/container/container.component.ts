import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
