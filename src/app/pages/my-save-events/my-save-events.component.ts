import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/events';
import { EventosService } from 'src/app/shared/eventos.service';
import { FiltroHomeService } from 'src/app/shared/filtro-home.service';




@Component({
  selector: 'app-my-save-events',
  templateUrl: './my-save-events.component.html',
  styleUrls: ['./my-save-events.component.css']
})
export class MySaveEventsComponent implements OnInit {
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

  filtroIncluye(filtro1:string, filtro2:any, filtro3:string){
    this.filtroHome.getfiltroHome(filtro1,filtro2,filtro3).subscribe((data:any)=>
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
     // let x = id
    this.homeService.eventoId = id;
    console.log(this.homeService.eventoId)
  }
 
   enableDisableRule() { 
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    
}

  ngOnInit(): void {
    this.mostrarEventos()
  }

}
