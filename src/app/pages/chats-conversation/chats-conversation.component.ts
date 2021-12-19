import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../shared/chat.service';
import { Chat } from '../../models/chat';
import { LoginService } from '../../shared/login.service';
import { Mensaje } from '../../models/mensaje';
import { Router } from '@angular/router';
import { MensajesService } from '../../shared/mensajes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chats-conversation',
  templateUrl: './chats-conversation.component.html',
  styleUrls: ['./chats-conversation.component.css']
})
export class ChatsConversationComponent implements OnInit {
  @ViewChild('content') content:ElementRef;
  public chats: any
  public mensajes: Mensaje[]
  public myId:number;
  constructor(private chatService: ChatService, private loginService: LoginService, private router: Router,private toastr: ToastrService, private mensajesService: MensajesService) 
  {
    this.myId = this.loginService.login.userId
    this.mensajes = []
    this.chatService.getChats(this.loginService.login.userId).subscribe((data:any) => 
    {
      this.chats = data.resultado[this.chatService.numchat]
      
        if(this.chats.urlFoto == null || this.chats.urlFoto == ''){
          this.chats.urlFoto = '../../../assets/img/fotoPerfilUsuario.jpg'
        }
      
    })
    this.getMSGs();
    

  }
  public getMSGs(){
    this.mensajesService.getMensajes(this.chatService.seeChatId).subscribe((data:any)=>{
      this.mensajes = data.resultado
    });
    this.scrollToBottom();
  }
  public goBack(){
   this.router.navigate(["/chats"])
  }
  public newMSG(msgcontent:string){
    if(msgcontent.length > 0){
      let msg:Mensaje;
      msg = {
        id_mensaje:Number(""),
        id_chat:this.chatService.seeChatId,
        id_emisor:this.loginService.login.userId,
        mensaje:msgcontent,
        fecha:new Date()
      }
      this.mensajesService.postMensajes(msg).subscribe((data:any)=>{
        if(data.error){
          this.toastr.error("",data.msg,{timeOut:2000, positionClass:"toast-top-full-width"});
        } else{
          if(data.resultado.affectedRows === 1){
            this.getMSGs();
          } else {
            this.toastr.error("",data.msg,{timeOut:2000, positionClass:"toast-top-full-width"});
          }
          
        }
      });
    }
    
  }
  public scrollToBottom(){
    try {
      this.content.nativeElement.scroll({
        top:this.content.nativeElement.scrollHeight,
        left:0,
        behavior:'smooth'
      })
    } catch (error) {
      
    }
  }
  ngOnInit(): void {
  }

}
