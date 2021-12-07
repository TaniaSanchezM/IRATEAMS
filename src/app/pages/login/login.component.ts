import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { LoginService } from '../../shared/login.service';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(public loginService: LoginService) {
  }

  onSubmit(form:NgForm){
    this.loginService.logIn(this.loginService.login.userCredentials,this.loginService.login.password).subscribe((data:any)=>{
      let apiResponse = data;
      if (apiResponse.error) {
        alert(apiResponse.msg)
      } else {
        if (apiResponse.resultado.length = 0) {
          alert(apiResponse.msg)
        } else {
          this.loginService.login.userId = apiResponse.resultado[0].id_usuario;
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
