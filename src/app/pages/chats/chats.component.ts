import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatService } from '../../shared/chat.service';
import { Chat } from '../../models/chat';
import { Mensaje } from '../../models/mensaje';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  public chats: Chat[];
  constructor(private chatService: ChatService, private loginService: LoginService) 
  {
    this.chats = []
    this.chatService.getChats(this.loginService.login.userId).subscribe((data:any) => 
    {
      this.chats = data.resultado
    })
  }

  
  

  ngOnInit(): void {
  }

}
