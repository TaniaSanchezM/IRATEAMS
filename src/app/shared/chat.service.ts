import { Injectable } from '@angular/core'; 
import { HttpClient,HttpHeaders } from '@angular/common/http'; 
import { Chat } from '../models/chat'; 
import { Mensaje } from '../models/mensaje'; 


@Injectable({ providedIn: 'root' }) 

export class ChatService { 
  public chat: Chat; 
  public mensaje: Mensaje; 
   
  // private url = "http://localhost:3000/chats"
  private url: string = 'https://api-irateams.herokuapp.com/chats';
  private url2: string = 'https://api-irateams.herokuapp.com/chat';
  public numchat:number;
  public seeChatId:number;
  
  constructor(private http: HttpClient) { } 
  
  getChats(userId: number) { 
    return this.http.get(this.url + "?id=" + userId) 
  } 
  
  postChat(id_usuario: number, id_creador: number) { 
    // console.log("entrada SERvicio")
    // console.log(nuevoChat)
    // return this.http.post(this.url, nuevoChat)
    
    let options= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id_user1: id_usuario,
        id_user2: id_creador
      }
    }

    return this.http.post(this.url, options)
  } 
  
  deleteChat(chatId: number) { 
    return this.http.delete(this.url + "/" + chatId) 
  } 
   
}
