import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user:User;
  public error:boolean
  constructor() {
    this.user = new User();
    this.error = true;
   }
   samePassword(repeatedPassword:string,password:string){
    if(repeatedPassword !== password){
      this.error = true
    }
    else{
      this.error= false
    }
    console.log(this.error)
   }
   onSubmit(form:NgForm){
    console.log(form.value);
    console.log(this.user);
    
  }
  ngOnInit(): void {
  }

}
