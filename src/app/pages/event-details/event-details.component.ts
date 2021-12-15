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
  public router: Router

  constructor(private toastr: ToastrService,public routeLocation: Location, private EventosService: EventosService, private loginService: LoginService, private UsuarioServicio: UsersService) { 
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

      this.UsuarioServicio.getUser(this.eventSelected.id_creador).subscribe((data: any)=>
      {
        console.log(data.resultado[0])
        this.eventCreator = data.resultado[0];
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
  
  pasarDatos(deporte: string, titulo: string, personas: string, fecha: string, hora:string,  localidad: string, direccion: string,  material: boolean, pago: boolean, descripcion: string, img: string){
    
    // this.evento = new Event (img,titulo, deporte, fecha, hora, ubicacion, personas, material, pago)
    
    let date = new Date(fecha+" "+ hora)
    console.log(date)
    console.log(this.id_usuario)
    let id_creador = this.id_usuario;
    

    this.evento = new Event (deporte, titulo, this.id_usuario, parseInt(personas), date, direccion, localidad, descripcion, material, pago, img, this.eventSelected.id_evento)
  
    
    console.log(this.evento);
    console.log(this.id_usuario);

  }

  public showLeave():void{
    this.toastr.error('', 'Has abandonado el evento',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  public showJoin():void {
    this.toastr.success('', 'Te has unido al evento',{timeOut:4000, positionClass:"toast-top-full-width"});
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
