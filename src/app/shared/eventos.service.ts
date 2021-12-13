import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Event} from '../models/events';

@Injectable({
  providedIn: 'root'
})
export class EventosService {


  private url ="https://api-irateams.herokuapp.com/eventos"

  public eventoId: number;

  constructor( private http: HttpClient) { }

  getEvento(){
    return this.http.get(this.url + "?id=" + this.eventoId)
  }
  getEventos(){
    return this.http.get(this.url)
  }
  
  postEventos(newEvent: Event){
    return this.http.post(this.url, newEvent)
  }

  putEventos(newEvent: Event){
    return this.http.put(this.url, newEvent)
    
  }

  deleteEventos(id:number){
    const httpOptions = {headers: null, body:id}
    return this.http.delete(this.url, httpOptions)
  }

}

