import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import { CommonModule } from '@angular/common';
import { EmailvalidatorDirective } from '../emailvalidator/emailvalidator.directive';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'hinv-login',
  imports: [FormsModule, HoverDirective, CommonModule, EmailvalidatorDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

    email: string = '';
  password: string = '';

  constructor(private route: Router) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  login(){
if(this.email=="admin@gmail.com"&& this.password=="admin"){
  this.route.navigate(['/rooms'])
} else {
  alert("Login Failed");
}
  }
}
