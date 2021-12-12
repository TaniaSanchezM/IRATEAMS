import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';
import { Pipe } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public registro: Register;
  // private url:string = 'https://irateams.herokuapp.com/usuarios';
  private url:string = 'http://localhost:3000/usuarios';
  constructor(private http:HttpClient) { }
  register(){
    let registerData = {username:this.registro.userName,mail:this.registro.email,password:this.registro.password}
    return this.http.post(this.url,registerData);
  }
}
