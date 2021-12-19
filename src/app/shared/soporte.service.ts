import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoporteService {
  private url:string = 'https://api-irateams.herokuapp.com/soporte';
  constructor(private http:HttpClient) { }
  newSupport(userMail:string, userQuestion:string){
    let ticket = {mail:userMail, question:userQuestion}
    return this.http.post(this.url,ticket);
  }
}
