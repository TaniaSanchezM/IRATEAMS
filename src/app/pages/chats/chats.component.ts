import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatService } from '../../shared/chat.service';
import { Chat } from '../../models/chat';
import { LoginService } from '../../shared/login.service';
import { Mensaje } from '../../models/mensaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  public chats: any;
  constructor(private chatService: ChatService, private loginService: LoginService, private router: Router) 
  {
    this.chats = []
    this.chatService.getChats(this.loginService.login.userId).subscribe((data:any) => 
    {
      this.chats = data.resultado
    })
  }
  public showMSG(id:number){
    this.chatService.numchat =  id
    this.chatService.seeChatId = this.chats[id].id_chat
    this.router.navigate(["/chat-id"])
  }
  ngOnInit(): void {
  }

}
