import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../../shared/register.service';
import { Register } from '../../models/register';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userData:Register;
  constructor(private toastr: ToastrService,public registerService:RegisterService,private location: Location) {
    this.userData = new Register();
   }
   
  onSubmit(form:NgForm){
    if(this.userData.repeatPassword == this.userData.password){
      this.registerService.registro = this.userData;
      this.registerService.register().subscribe((data:any)=>{
        let apiResponse = data;
        if (apiResponse.error) {
          this.toastr.error("",apiResponse.msg,{timeOut:4000, positionClass:"toast-top-full-width"});
        } else {
          if (apiResponse.resultado.length = 0) {
            this.toastr.error("",apiResponse.msg,{timeOut:4000, positionClass:"toast-top-full-width"});
          } else {
          this.toastr.success("",apiResponse.msg,{timeOut:4000, positionClass:"toast-top-full-width"});
          this.location.back();
          }
        }
      });
    } else {
      this.toastr.error("",'Las contraseñas deben ser identicas',{timeOut:2000, positionClass:"toast-top-full-width"});
    }
  }
  ngOnInit(): void {
  }

}
