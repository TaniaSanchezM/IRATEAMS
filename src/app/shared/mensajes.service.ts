import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Chat } from '../models/chat'; 
import { Mensaje } from '../models/mensaje'; 

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  public chat: Chat; 
  public mensaje: Mensaje; 
  private url: string = 'https://api-irateams.herokuapp.com/mensajes';

  constructor(private http: HttpClient) { }

  getMensajes(chatId: number) { 
    return this.http.get(this.url + "?id=" + chatId) 
  } 
  
  postMensajes(newMensaje: Mensaje) { 
    return this.http.post(this.url, newMensaje) 
  }
}
