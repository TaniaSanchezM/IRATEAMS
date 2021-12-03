import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  public user:User;
  constructor() {
    this.user = new User();
   }

  onSubmit(form:NgForm){
    console.log(form.value);
    console.log(this.user);
    
  }
  ngOnInit(): void {
  }

}
