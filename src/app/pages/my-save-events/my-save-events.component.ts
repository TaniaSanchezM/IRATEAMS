import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/events';
import { EventosService } from 'src/app/shared/eventos.service';
import { FiltroHomeService } from 'src/app/shared/filtro-home.service';
import { GuardadosService } from '../../shared/guardados.service';
import { LoginService } from '../../shared/login.service';
import { MyhomeService } from '../../shared/myhome.service';
import { Guardado } from 'src/app/models/guardados';




@Component({
  selector: 'app-my-save-events',
  templateUrl: './my-save-events.component.html',
  styleUrls: ['./my-save-events.component.css']
})
export class MySaveEventsComponent implements OnInit {
  public mysave: Event [] = []
  public events : Event[]
  public siClick : boolean = false
  public filtro : Event[]
  public beginSliding : boolean = false
  public deletesave : Guardado
  constructor(private homeService: EventosService, private filtroHome: FiltroHomeService, public guardarService: GuardadosService, public loginService: LoginService, public myhomeservice: MyhomeService) {}
  mostrarEventos(id_usuario:number){
    
    this.myhomeservice.getHome(id_usuario).subscribe((data:any)=>
    {
      console.log(data.resultado);
      
      this.events = data.resultado
      for (let event of this.events){
        if (event.guardado == true){
          console.log(this.mysave);          
          this.mysave.push(event)
          console.log(this.mysave);
      }}
      for (const myevent of this.mysave) {
        console.log(myevent.titulo,myevent.urlFotoEvento)
        if(myevent.urlFotoEvento == null || myevent.urlFotoEvento == ''){
          myevent.urlFotoEvento = '../../../assets/img/deportes.jpg'
        }
      
      }
    })
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

  filtroIncluye(filtro1:string, filtro2:any, filtro3:string){
    this.filtroHome.getfiltroHome(filtro1).subscribe((data:any)=>
    {
      this.filtro = data.resultado
      console.log(data.resultado);
      this.events = data.resultado
    })
  }

  mostrarFiltro(){
    this.siClick = true
  }

  getIdEvento(id: number)
  {
    console.log(id)
    this.homeService.eventoId = id;
    console.log(this.homeService.eventoId)
  }
 


  ngOnInit(): void {
    let id_usuario = this.loginService.login.userId;
    this.mostrarEventos(id_usuario)
  }

}
