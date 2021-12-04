import { Component, OnInit } from '@angular/core';
import { now } from 'moment';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css']
})
export class PastEventsComponent implements OnInit {

  public event1: any;
  public event2: any;
  public event3: any;
  public event4: any;
  public event5: any;
  public event6: any;
  public event7: any;
  public event8: any;
  public event9: any;
  public event10: any;

  public myEvents: any[];
  public pastEvents: any[];
  public today = new Date();


  constructor() {

    this.event1     = {nombre:"partido de fútbol",      fecha: new Date(2021,11,30),  hora:"20:00", ubicacion:"calle falsa 123"}
    this.event2     = {nombre:"ruta en bici",           fecha: new Date(2021,11,25),  hora:"12:00", ubicacion:"calle falsa 123"}
    this.event3     = {nombre:"partido de pádel",       fecha: new Date(2021,11,21),  hora:"18:30", ubicacion:"calle falsa 123"}
    this.event4     = {nombre:"partido de baloncesto",  fecha: new Date(2021,11,18),  hora:"21:00", ubicacion:"calle falsa 123"}
    this.event5     = {nombre:"ruta senderismo",        fecha: new Date(2021,11,10),  hora:"15:30", ubicacion:"calle falsa 123"}
    this.event6     = {nombre:"partido de volleyball",  fecha: new Date(2021,11,1),   hora:"19:00", ubicacion:"calle falsa 123"}
    this.event7     = {nombre:"partida de canicas",     fecha: new Date(2021,10,30),  hora:"18:00", ubicacion:"calle falsa 123"}
    this.event8     = {nombre:"partido de tenis",       fecha: new Date(2021,10,22),  hora:"22:00", ubicacion:"calle falsa 123"}
    this.event9     = {nombre:"partida de petanca",     fecha: new Date(2021,9,12),   hora:"16:00", ubicacion:"calle falsa 123"}
    this.event10    = {nombre:"ruta senderismo",        fecha: new Date(2021,9,1),    hora:"11:00", ubicacion:"calle falsa 123"}
    this.myEvents   = [this.event1, this.event2, this.event3, this.event4, this.event5, this.event6, this.event7, this.event8, this.event9, this.event10]
    this.pastEvents = []
    let i = 0;
    while ( i < this.myEvents.length && this.pastEvents.length<10){
      if(this.today.getTime() > this.myEvents[i].fecha.getTime()){
        
        
        this.pastEvents.push(this.myEvents[i]); 
      }
      i++
    }
    
  }

  ngOnInit(): void {
  }

  pastEventsList(): any {
    
  }

}
