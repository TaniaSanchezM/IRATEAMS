import { Injectable } from '@angular/core';
import { Apuntados } from '../models/apuntados';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApuntadosService {

  // public eventoIdApuntado: number
  
  private url ="https://api-irateams.herokuapp.com/apuntados"

  constructor(private http: HttpClient) { }

  getApuntado(eventoIdApuntado: number){
    return this.http.get(this.url + "?id=" + eventoIdApuntado)
  }
  getApuntados(){
    return this.http.get(this.url)
  }
  
  postApuntado(newEvent: Apuntados){
    return this.http.post(this.url, newEvent)
  }

  
  deleteApuntado(idEvento:number, idUsuario: number){
    // const httpOptions = {headers: null, body:id}
    // return this.http.delete(this.url, httpOptions)

    let options= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id_evento: idEvento,
        id_usuario: idUsuario
      }
    }

    return this.http.delete(this.url, options)
  }
}
