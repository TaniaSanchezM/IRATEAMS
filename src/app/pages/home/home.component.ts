import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/events';
import { id } from 'date-fns/locale';
import { EventosService } from 'src/app/shared/eventos.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public events : Event[]
  public siClick : boolean = false
  

  fechasFiltradas(){
    this.siClick = true
  }
   mostrarFiltro(){
     this.siClick = true
   }
    constructor(private homeService: EventosService, ) {}
    mostrarEventos(){
     this.homeService.getEventos().subscribe((data: any)=>
     {
       this.events = data.resultado
     })

    
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
  // onSearch(){
  //   this.fechasFiltradas = date1.value
  //     .filter((date: Date)=>pickerDate.getTime() < date.getTime() < pickerDate2.getTime())
  // }

  // filtrarFecha(date: Date){
  //   this.homeService.getEventos().subscribe((data: any)=>
  //    {
  //      this.events = data.resultado; 
  //      for ( let i =0; i < this.events.length; i++){
  //       this.events[i].fecha.filter(this.filtrar)
  //     }
       
  //    })
  // }
  // filtrar(date: Date){
  //    return 
  // }

  ngOnInit(): void {
    this.mostrarEventos()
  }



}
