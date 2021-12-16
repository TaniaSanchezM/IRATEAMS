import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventosReducido } from '../models/eventos-reducido';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

 private url = "https://api-irateams.herokuapp.com/calendario"
  // private url = "http://localhost:3000/calendario"

  constructor(private http: HttpClient) { }

  getCalendar(id:number)
  {
    return this.http.get(this.url + "?id=" + id)
  }
  postCalendar(event:EventosReducido)
  {
    return this.http.post(this.url, event)
  }
  putCaledar(event:EventosReducido)
  {
    return this.http.put(this.url, event)
  }
  deleteCalendar(id:any)
  {
    const httpOptions = {headers: null, body: id}
    return this.http.delete(this.url, httpOptions)
  }
}
