import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecoveryPasswordService {
  private url:string = 'https://api-irateams.herokuapp.com/recPass';
  constructor(private http:HttpClient) {

  }
  public recoverPass(email){
    let body = {mail:email}
    return this.http.post(this.url,body)
  }
}
