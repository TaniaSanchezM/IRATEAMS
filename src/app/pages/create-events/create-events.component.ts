import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  public evento =[]
  constructor(private toastr: ToastrService) { }

  public showSuccess():void {
    this.toastr.success('', 'Evento creado correctamente',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  public showError():void{
    this.toastr.error('', 'No se ha podido crear el evento',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  ngOnInit(): void {
  }
  createEvent(img:string, titulo:string, deporte:string, fecha:string, hora:string, ubicacion:string, personas:string, material:string, pago:string, edad:string){
    // if (material === "option1")
    this.evento = [img,titulo, deporte, fecha, hora, ubicacion, personas, material, pago, edad]
    console.log(this.evento);
    let error = false
    if(error){
      this.showError();
    } else {
      this.showSuccess();
    }
    
  }
  
}

