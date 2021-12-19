import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/events';
import { Guardado } from 'src/app/models/guardados';
import { id } from 'date-fns/locale';
import { EventosService } from 'src/app/shared/eventos.service';
import { FiltroHomeService } from 'src/app/shared/filtro-home.service';
import {HttpParams} from "@angular/common/http";
import { GuardadosService } from '../../shared/guardados.service';
import { LoginService } from '../../shared/login.service';
import { MyhomeService } from 'src/app/shared/myhome.service';

 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public events : Event[]
  public siClick : boolean = false
  public filtro : Event[]
  public beginSliding : boolean = false
  public toggle = true;
  public status = 'Enable'; 
  public deletesave : Guardado

  constructor(private homeService: EventosService, private filtroHome: FiltroHomeService, public guardarService: GuardadosService, public loginService:LoginService, public myhomeservice: MyhomeService) {}
  mostrarEventos(){
   this.homeService.getEventos().subscribe((data: any)=>
   {
     this.events = data.resultado
     for (let event of this.events) {
       console.log(event.titulo, event.urlFotoEvento)
       if(event.urlFotoEvento == null || event.urlFotoEvento == ''){
         event.urlFotoEvento = '../../../assets/img/deportes.jpg'
       }
     }
   })
 }
   mostrarFiltro(){
     this.siClick = true
   }

   filtroIncluye(filtro1:string){
     this.filtroHome.getfiltroHome(filtro1).subscribe((data:any)=>
     {
       this.filtro = data.resultado
       console.log(data.resultado);
       this.events = data.resultado
     })
   }

   mostrarMyHome(id_usuario: number){
    this.myhomeservice.getHome(id_usuario).subscribe((data:any)=>
    {
      console.log(data.resultado);
      
      this.events = data.resultado
      for (const event of this.events) {
        console.log(event.titulo,event.urlFotoEvento)
        if(event.urlFotoEvento == null || event.urlFotoEvento == ''){
          event.urlFotoEvento = '../../../assets/img/deportes.jpg'
        }
      }
    })
   }

   getIdEvento(id: number)
   {
     console.log(id)
     this.homeService.eventoId = id;
     console.log(this.homeService.eventoId)

   }
   changeEvent(evento:Event){
     console.log(evento);
     let id_usuario = this.loginService.login.userId;
     
    if (!evento.guardado || evento.guardado ===null){  
      evento.guardado = !evento.guardado;    
      console.log(id_usuario);
      console.log(evento.id_evento);
      let newguardado = new Guardado(id_usuario,evento.id_evento)
      this.guardarService.postGuardados(newguardado).subscribe((data:any)=>
      {
        newguardado = data.resultado
        console.log(data.resultado);
        
      })
    }
    else{
      evento.guardado = !evento.guardado;
      let id_usuario = this.loginService.login.userId;    
      this.guardarService.deleteGuardados(id_usuario, evento.id_evento).subscribe((data:any)=>
      {
        this.deletesave= data.resultado
        console.log(this.deletesave);
        
      })    
      }
   }

   editor(){
    this.siClick = true
    }
  
    changeColor(){
    
   }
  ngOnInit(): void {
    let id_usuario = this.loginService.login.userId;
    if (id_usuario === undefined || id_usuario === null){
      
      this.mostrarEventos()
      console.log(this.events)
    }
    else{
      this.mostrarMyHome(id_usuario)
    }
    
  }
}

