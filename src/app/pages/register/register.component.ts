import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user:User;
  public error:boolean
  constructor(private toastr: ToastrService) {
    this.user = new User();
    this.error = true;
   }
   public samePassword(repeatedPassword:string,password:string):void{
    if(repeatedPassword !== password){
      this.error = true
    }
    else{
      this.error= false
    }
    console.log(this.error)
   }
   showSuccess() {
    this.toastr.success('', 'Tu cuenta se ha creado correctamente',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  showError(){
    this.toastr.error('', 'No se ha podido crear tu cuenta',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
   onSubmit(form:NgForm){
    console.log(form.value);
    console.log(this.user);
    
  }
  ngOnInit(): void {
  }

}
