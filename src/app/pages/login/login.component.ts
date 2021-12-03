import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User
  constructor() {
    this.user = new User();
  }

  onSubmit(form:NgForm){

  }

  ngOnInit(): void {
  }

}
