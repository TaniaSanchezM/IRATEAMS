import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Guardado } from '../models/guardados';

@Injectable({
  providedIn: 'root'
})
export class GuardadosService {

  private url = 'https://api-irateams.herokuapp.com/guardados'
  // private url = "http://localhost:3000/guardados"
  constructor( private http: HttpClient) { }

  getGuardados(id:number){
    return this.http.get(this.url + "?id_usuario=" + id)
  }

  postGuardados(newguardado: Guardado){
    // console.log("entraservicio")
    // console.log(id1);
    // console.log(id2)
    
    // let options= {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   }),
    //   body: {
    //           id_usuario: id1,
    //           id_evento: id2
    //       },
    // }

    // console.log(options)

    return this.http.post(this.url, newguardado)
  }

  deleteGuardados(id_usuario:number, id_evento:number){
    // const httpOptions = {headers: null, body:id}

    let options= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
              id_usuario: id_usuario,
              id_evento: id_evento
          },
    }
    return this.http.delete(this.url, options)
  }
}
