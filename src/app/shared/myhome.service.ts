import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyhomeService {

  private url = 'https://api-irateams.herokuapp.com/home'
  // private url = "http://localhost:3000/home"

  constructor( private http: HttpClient) { }

  getHome(id_usuario:number){
    return this.http.get(this.url + "?id_usuario=" + id_usuario)
  }
}
