import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public login:Login;
  private url:string = 'https://irateams.herokuapp.com/login';
  constructor(private http:HttpClient) { }

  logIn(userCredentials:string, pswd:string){
    let loginData = {user:userCredentials, password:pswd}
    return this.http.post(this.url,loginData);
  }
}
