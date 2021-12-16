import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventosReducido } from '../models/eventos-reducido';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private url = "https://api-irateams.herokuapp.com/historial"
  // private url = "http://localhost:3000/historial"

  constructor(private http: HttpClient) { }
  getHistorial(id:number)
  {
    return this.http.get(this.url + "?id=" + id)
  }
  postHistorial(event:EventosReducido)
  {
    return this.http.post(this.url, event)
  }
  putHistorial(event:EventosReducido)
  {
    return this.http.put(this.url, event)
  }
  deleteHistorial(id:any)
  {
    const httpOptions = {headers: null, body: id}
    return this.http.delete(this.url, httpOptions)
  }
}
