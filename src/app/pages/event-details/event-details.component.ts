import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { EventosService } from '../../shared/eventos.service';
import { add } from 'date-fns';

import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';
import { LoginService } from '../../shared/login.service';
import { Event } from 'src/app/models/events';
import { Router } from '@angular/router';
import { ApuntadosService } from 'src/app/shared/apuntados.service';
import { Apuntados } from '../../models/apuntados';
import { ChatService } from '../../shared/chat.service';
import { Chat } from 'src/app/models/chat';
import { Mensaje } from 'src/app/models/mensaje';
import { MensajesService } from '../../shared/mensajes.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public today!: any
  public today2!: any
  public daysLeft!: number
  public eventSelected: Event;
  public eventCreator: User;

  public user: User 
  public id_usuario: number
  public evento: Event
  public evento2: Event
  public router: Router
  public cost: boolean;
  public mat: boolean;
  public personasApuntadas: Apuntados[];
  public numPersonasApuntadas: number;
  public nuevoApuntado: Apuntados
  public modNumApuntadosEvento: number
  public nuevoChat: Chat
  public nuevoChat2: Chat
  public mensajeApuntado: Mensaje


  constructor(private toastr: ToastrService,public routeLocation: Location, private EventosService: EventosService, private loginService: LoginService, private UsuarioServicio: UsersService, private ApuntadosServicio: ApuntadosService, private ChatServicios: ChatService, private MensajesService: MensajesService) { 
    this.today = Date.now()
    this.today2 = new Date(2021,12,1)

    let id_usuario = this.loginService.login.userId;
    console.log(id_usuario)
    console.log(this.EventosService.eventoId)

    this.EventosService.getEvento().subscribe((data: any)=>
    {
      
      console.log(data.resultado[0]);
      console.log("flagconst")
      this.eventSelected = data.resultado[0];
      this.cost =  this.eventSelected.pago.valueOf();
      console.log(this.cost);
      
      this.mat =  this.eventSelected.material.valueOf();
      console.log(this.mat)

      this.UsuarioServicio.getUser(this.eventSelected.id_creador).subscribe((data: any)=>
      {
        console.log(data.resultado[0])
        this.eventCreator = data.resultado[0];
      })

      this.ApuntadosServicio.getApuntado(this.eventSelected.id_evento).subscribe((data: any)=>
      {
        console.log(data.resultado)
        this.personasApuntadas = data.resultado
        this.numPersonasApuntadas = data.resultado.length
        console.log(this.personasApuntadas)

      })
      
      

    })

        // this.daysLeft =  this.today2.getDate() -this.today.getDate()

    // console.log(EventosService.eventoId)
    // this.EventosService.getEvento().subscribe((data: any)=>
    // {
    //   // this.events = data.resultado
    //   console.log(data.resultado[0]);
    //   this.eventSelected = data.resultado[0];

      

    // })

    // this.user=new User(0,"","","","",new Date(),"","")
    console.log(loginService.login.userId)
    this.id_usuario = this.loginService.login.userId;
    console.log(this.id_usuario)

  }

  usuarioApuntado()
        {
          let respuesta: boolean



          // respuesta = true
          // console.log(respuesta)
          if(this.personasApuntadas.length == 0)
          {
            respuesta = false
            return respuesta
          }
          else{
            let i = 0;
          while (i<this.personasApuntadas.length) {
            respuesta = false
            // console.log(respuesta)
            if(this.personasApuntadas[i].id_usuario === this.id_usuario )
            {
              respuesta = true;
              break;
            }
            i++;
          }
          console.log(respuesta)
          return respuesta
          }
          
          

          // for(let apuntado of this.personasApuntadas)
          // {
            
            // var text = "";
            // var i = 0;
            // while (i < 5) {
            //   text += "<br>The number is " + i;
            //   i++;
            // }

              
            // do {
            //     respuesta = false

            // } while (apuntado.id_usuario != this.id_usuario);

            // respuesta = true
          
            // if(apuntado.id_usuario == this.id_usuario)
            // {
            //   respuesta =  true
            // }else
            // {
            //   respuesta = false
            // }
          // }
          // console.log(respuesta)
          // return respuesta
          
        }
  
  pasarDatos(deporte: string, titulo: string, personas: string, fecha: string, hora:string,  localidad: string, direccion: string,  material: boolean, pago: boolean, descripcion: string, img: string){
    
    // this.evento = new Event (img,titulo, deporte, fecha, hora, ubicacion, personas, material, pago)
    
    let date = new Date(fecha+" "+ hora)
    console.log(date)
    console.log(this.id_usuario)
    let id_creador = this.id_usuario;
    

    this.evento = new Event (deporte, titulo, this.id_usuario, parseInt(personas), date, direccion, localidad, descripcion, material, pago, img, this.eventSelected.id_evento, null)
  
    
    console.log(this.evento);
    console.log(this.id_usuario);

  }

  public showLeave():void{
    this.toastr.error('', 'Has abandonado el evento',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  public showJoin():void {
    this.toastr.success('', 'Te has unido al evento',{timeOut:4000, positionClass:"toast-top-full-width"})
  }
  public goBack():void{
    this.routeLocation.back()
  }

  public  editEvento():void
  {
    
    this.EventosService.putEventos(this.evento).subscribe((data: any)=>
    {      
      console.log(data);
      console.log(data.resultado)
      console.log(this.EventosService.eventoId)
      this.eventSelected.titulo = "Hola que tal";
      
      this.eventSelected = this.evento
      
    })
    
    
  }

  apuntarme()
  {
    this.eventSelected.nPersSolicitadas = this.eventSelected.nPersSolicitadas-1
    
    this.nuevoApuntado = new Apuntados(this.id_usuario, this.eventSelected.id_evento)

    this.EventosService.putEventos(this.eventSelected).subscribe((data: any)=>
        {
          console.log(data)
          console.log(data.resultado)

        })

    this.ApuntadosServicio.postApuntado(this.nuevoApuntado).subscribe((data: any)=>
        {
          console.log(data)
          console.log(data.resultado)

        })



    // this.evento2 = this.eventSelected
    // this.evento2.nPersSolicitadas = this.evento2.nPersSolicitadas -1
    // console.log(this.evento2)
    // this.modNumApuntadosEvento = this.eventSelected.nPersSolicitadas -1
    // this.eventSelected.nPersSolicitadas = this.modNumApuntadosEvento
    
    
    // this.mensajeApuntado = new Mensaje()
    this.nuevoChat = new Chat(this.id_usuario, this.eventSelected.id_creador, null)
    console.log(this.id_usuario)
    console.log(this.eventSelected.id_creador)

    this.ChatServicios.postChat(this.id_usuario, this.eventSelected.id_creador).subscribe((data3: any)=>
    {
        console.log(data3)
        console.log(data3.resultado)
    })

  }


  borrarme()
  {
    // this.modNumApuntadosEvento = this.eventSelected.nPersSolicitadas +1
    // this.evento.nPersSolicitadas = this.modNumApuntadosEvento

    this.eventSelected.nPersSolicitadas = this.eventSelected.nPersSolicitadas+1

    this.EventosService.putEventos(this.eventSelected).subscribe((data: any)=>
      {
        console.log(data)
        console.log(data.resultado)

    })

    this.ApuntadosServicio.deleteApuntado(this.eventSelected.id_evento, this.id_usuario).subscribe((data: any)=>
    {
      console.log(data)
      console.log(data.resultado)
    })
    
  }

  // crearChat()
  // {
  //   this.nuevoChat2 = new Chat(0, this.eventSelected.id_creador, this.id_usuario)
  //   this.ChatServicios.postChat(this.nuevoChat2).subscribe((data: any)=>
  //   {
  //     console.log(data)
  //     console.log(data.resultado)

  //   })
  // }


  // ngAfterViewInit(): void {
  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   //Add 'implements AfterViewInit' to the class.
  //   console.log(this.EventosService.eventoId)
  //   this.EventosService.getEvento().subscribe((data: any)=>
  //   {
      
  //     // this.events = data.resultado
  //     console.log(data.resultado[0]);
  //     this.eventSelected = data.resultado[0];

  //   })
  // }
  
  ngOnInit(): void {
    
  }

}
