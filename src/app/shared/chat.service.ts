import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Chat } from '../models/chat'; 
import { Mensaje } from '../models/mensaje'; 


@Injectable({ providedIn: 'root' }) 

export class ChatService { 
  public chat: Chat; 
  public mensaje: Mensaje; 
  private url: string = 'https://api-irateams.herokuapp.com/chats'; 
  
  constructor(private http: HttpClient) { } 
  
  getChats(userId: number) { 
    return this.http.get(this.url + "?id=" + userId) 
  } 
  
  postChat(newChat: Chat) { 
    return this.http.post(this.url, newChat) 
  } 
  
  deleteChat(chatId: number) { 
    return this.http.delete(this.url + "/" + chatId) 
  } 
   
}
