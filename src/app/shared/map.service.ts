import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  private url:string = 'https://api-irateams.herokuapp.com/eventos';
  constructor(private http:HttpClient) {
   }
   getEvents(){
    return this.http.get(this.url);
  }
}
