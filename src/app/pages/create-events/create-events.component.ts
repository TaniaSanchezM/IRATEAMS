import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventosService } from '../../shared/eventos.service';

// import { Event } from '@angular/router';
import { Event } from 'src/app/models/events';
import { LoginService } from 'src/app/shared/login.service';
import { User } from 'src/app/models/user';
// import { EventosService } from 'src/app/shared/eventos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  public evento: Event;
  // public evento2: Event;

  public user: User 
  public id_usuario: number

  constructor(private toastr: ToastrService, private loginService: LoginService, private EventosService: EventosService) {

    this.user=new User(0,"","","","",new Date(),"","")
    console.log(loginService.login.userId)
    this.id_usuario = this.loginService.login.userId;
    console.log(this.id_usuario)

    // this.evento2 = new Event("", "", 0, 0, new Date, "", "", "", false, false, "", 0)
  }

  public showSuccess():void {
    this.toastr.success('', 'Evento creado correctamente',{timeOut:2000, positionClass:"toast-top-full-width"});
  }
  public showError():void{
    this.toastr.error('', 'No se ha podido crear el evento',{timeOut:2000, positionClass:"toast-top-full-width"});
  }
  
  
  createEvent(img:string, titulo:string, deporte:string, fecha:string, hora:string, direccion: string, localidad:string, personas:string, material:boolean, pago:boolean, descripcion:string){
    // if (material === "option1")
    // this.evento = new Event (img,titulo, deporte, fecha, hora, ubicacion, personas, material, pago)
    
    let date = new Date(fecha+" "+ hora)
    console.log(date)
    console.log(this.id_usuario)
    let id_creador = this.id_usuario;
    

    this.evento = new Event (deporte, titulo, this.id_usuario, parseInt(personas), date, direccion, localidad, descripcion, material, pago, img, 200,null)
    
    console.log(this.evento);
    console.log(this.id_usuario);

    this.EventosService.postEventos(new Event(deporte, titulo, id_creador, parseInt(personas), date, direccion, localidad, descripcion, material, pago, img, 0, null)).subscribe((data: any)=>
    {
      if(data.error)
      {
        this.showError()
      } else {
        this.showSuccess()
      }
      // this.events = data.resultado
     
    })
    
  }



  ngOnInit(): void {
    let id_usuario = this.loginService.login.userId;
    console.log(id_usuario)
  }
}

