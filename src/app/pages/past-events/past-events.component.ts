import { Component, OnInit } from '@angular/core';
import { now } from 'moment';
import { Event } from 'src/app/models/events';
import { HistorialService } from '../../shared/historial.service';
import { LoginService } from '../../shared/login.service';
import { EventosService } from 'src/app/shared/eventos.service';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css']
})
export class PastEventsComponent implements OnInit {

  public historial: Event[];
    // public myEvents: any[];
  // public pastEvents: any[];
  public today = new Date();


  constructor(public HistorialService:HistorialService, public loginService:LoginService, public homeService: EventosService) {
    this.loginService = loginService
  }

  pastEventsList(){
    let id_usuario = this.loginService.login.userId;
    this.HistorialService.getHistorial(id_usuario).subscribe((data:any)=>
    {
      this.historial = data.resultado    
      console.log(this.historial)
    })   
    
  }

  getIdEvento(id: number)
  {
    console.log(id)
    this.homeService.eventoId = id;
    console.log(this.homeService.eventoId)
  }

  ngOnInit(): void {
    this.pastEventsList()
  }



}
