import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Event } from '../models/events';


@Injectable({
  providedIn: 'root'
})
export class FiltroHomeService {
  private url = 'https://api-irateams.herokuapp.com/filtroHome'
  constructor(private http: HttpClient) { }
      getfiltroHome(filtro1:string, filtro2:any, filtro3:string){
        let params = new HttpParams()
                .set('filtro1', filtro1)
                .set('filtro2', filtro2)
                .set('filtro3', filtro3);
                
        const filtroEvento = {headers: null,params:params}
        return this.http.get(this.url, filtroEvento)
      }
}

