import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../shared/login.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private toastr: ToastrService,public loginService: LoginService,private location: Location, private router: Router) {
  }

  onSubmit(form:NgForm){
    this.loginService.logIn().subscribe((data:any)=>{
      let apiResponse = data;
      if (apiResponse.error) {
        this.toastr.error("",apiResponse.msg,{timeOut:2000, positionClass:"toast-top-full-width"});
      } else {
        if (apiResponse.resultado.length > 0) {
          this.loginService.login.userId = apiResponse.resultado[0].id_usuario;
          this.toastr.success("",'Inicio de sesion completado',{timeOut:2000, positionClass:"toast-top-full-width"});
          this.router.navigate(["/home"]);
        } else {
          this.toastr.error("",apiResponse.msg,{timeOut:2000, positionClass:"toast-top-full-width"});
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
