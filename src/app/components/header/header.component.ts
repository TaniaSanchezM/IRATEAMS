import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './header.component.html'
})
export class NgbdDropdownBasic {
  public login:boolean = true;
  cerrarSesion(){
    this.login = false
  }
  iniciarSesion(){
    this.login = true
  }
 
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public login:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.login = false
  }
  iniciarSesion(){
    this.login = true
  }
}
