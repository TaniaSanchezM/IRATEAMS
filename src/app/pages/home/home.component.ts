import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public siClick : boolean = false
  constructor() {
   }
   mostrarFiltro(){
     this.siClick = true

   }

  ngOnInit(): void {
  }

}
