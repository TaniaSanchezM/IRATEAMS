import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  public evento =[]
  constructor() { }

  ngOnInit(): void {
  }
  createEvent(img:string, titulo:string, deporte:string, fecha:string, hora:string, ubicacion:string, personas:string, material:string, pago:string, edad:string){
    // if (material === "option1")
    this.evento = [img,titulo, deporte, fecha, hora, ubicacion, personas, material, pago, edad]
    console.log(this.evento);
    
  }
  
}

