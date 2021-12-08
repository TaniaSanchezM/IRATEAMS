import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Events} from '../models/events';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url = 'http://localhost:3000/eventos'
  constructor( private http: HttpClient) { }

  getGuardados(id:number){
    return this.http.get(this.url + "/" + id)
  }

  postGuardados(newEvent: Event){
    return this.http.post(this.url, newEvent)
  }

  putGuardados(newEvent: Event){
    return this.http.put(this.url, newEvent)
    
  }

  deleteGuardados(id:number){
    const httpOptions = {headers: null, body:id}
    return this.http.delete(this.url, httpOptions)
  }
}
