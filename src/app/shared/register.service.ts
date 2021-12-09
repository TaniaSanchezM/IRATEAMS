import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public registro: Register;
  private url:string = 'https://api-irateams.herokuapp.com/usuarios';
  constructor(private http:HttpClient) { }
  register(){
    let registerData = {username:this.registro.userName,mail:this.registro.email,password:this.registro.password}
    return this.http.post(this.url,registerData);
  }
}
