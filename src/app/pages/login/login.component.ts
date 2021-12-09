import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../shared/login.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private toastr: ToastrService,public loginService: LoginService,private location: Location) {
  }

  onSubmit(form:NgForm){
    this.loginService.logIn().subscribe((data:any)=>{
      let apiResponse = data;
      if (apiResponse.error) {
        this.toastr.error("",apiResponse.msg,{timeOut:4000, positionClass:"toast-top-full-width"});
      } else {
        if (apiResponse.resultado.length === 0) {
          this.toastr.error("",apiResponse.msg,{timeOut:4000, positionClass:"toast-top-full-width"});
        } else {
          this.loginService.login.userId = apiResponse.resultado[0].id_usuario;
          this.toastr.success("",'Inicio de sesion completado',{timeOut:4000, positionClass:"toast-top-full-width"});
          this.location.back();
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
