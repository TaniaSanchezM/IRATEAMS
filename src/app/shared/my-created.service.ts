import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../models/events';

@Injectable({
  providedIn: 'root'
})
export class MyCreatedService {

  private url = "https://api-irateams.herokuapp.com/miscreados"
  // private url = "http://localhost:3000/miscreados"

  constructor(private http: HttpClient) { }
  getMisCreados(id:number)
  {
    return this.http.get(this.url + "?id=" + id)
  }
  postMiCreado(event:Event)
  {
    return this.http.post(this.url, event)
  }
  putMiCreado(event:Event)
  {
    return this.http.put(this.url, event)
  }
  deleteMiCreado(id:number)
  {
    // const httpOptions = {headers: null, body: id_evento}
    // return this.http.delete(this.url, httpOptions)

    let options= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
            id_evento: id
          },
    }
  return this.http.delete(this.url, options)
  }
}
