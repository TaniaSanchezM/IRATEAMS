import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from '../models/events';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public allEvents:Events[];
  private url:string = 'https://irateams.herokuapp.com/events';
  constructor(private http:HttpClient) {
    this.allEvents = [];
   }
   getEvents(){
    return this.http.get(this.url);
  }
}
