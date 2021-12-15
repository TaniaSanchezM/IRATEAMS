import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/events';
import { id } from 'date-fns/locale';
import { EventosService } from 'src/app/shared/eventos.service';
import { FiltroHomeService } from 'src/app/shared/filtro-home.service';
import {HttpParams} from "@angular/common/http";
 
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

  constructor(private homeService: EventosService, private filtroHome: FiltroHomeService) {}
  
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

   filtroIncluye(filtro1:string, filtro2:any, filtro3:string){
     this.filtroHome.getfiltroHome(filtro1,filtro2,filtro3).subscribe((data:any)=>
     {
       this.filtro = data.resultado
       console.log(data.resultado);
       this.events = data.resultado
     })
   }

   enableDisableRule() {
     
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
}

   getIdEvento(id: number)
   {
     console.log(id)
      // let x = id
     this.homeService.eventoId = id;
     console.log(this.homeService.eventoId)
     

    // this.card_evento = id;

    // console.log(this.card_evento)
    //  this.homeService.getEvento(card).subscribe((data: any)=>
    //  {
    //    console.log(data.resultado)
       
    //  })
   }

   editor(){
    this.siClick = true
    }
  
    changeColor(){
    
   }
  ngOnInit(): void {
    this.mostrarEventos()
    console.log(this.events)
  }
}

