import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public login:Login;
 private url:string = 'https://api-irateams.herokuapp.com/login';
  // private url = "http://localhost:3000/login"
  // private url:string = 'http://localhost:4120/login';
  constructor(private http:HttpClient) {
    this.login = new Login()
   }

  logIn(){
    let loginData = {user:this.login.userCredentials, password:this.login.password}
    return this.http.post(this.url,loginData);
  }
}
