import { Component, Inject, OnInit } from '@angular/core';
import { RoomsComponent} from './rooms/rooms.component';
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { LocalStorageToken } from './localstorage.token';
import { InitService } from './init.service';

@Component({
  standalone: true,
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ContainerComponent, RoomsComponent, EmployeeComponent]
})
export class AppComponent implements OnInit{

  title = 'hotelinventoryapp';

constructor(@Inject(LocalStorageToken) private localStorage: Storage, private initService: InitService) {
  console.log(initService.config);
}

  ngOnInit(): void {
    this.localStorage.setItem('name', 'Hotel California');
  }

}