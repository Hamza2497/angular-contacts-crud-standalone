import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';

@Component({
  standalone: true,
  selector: 'hinv-login',
  imports: [FormsModule, HoverDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

    email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  login(){
if(this.email=="admin@gmail.com"&& this.password=="admin"){
  alert("Login Successful");
} else {
  alert("Login Failed");
}
  }
}
