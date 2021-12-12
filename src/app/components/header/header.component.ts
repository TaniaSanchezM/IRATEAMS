import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './header.component.html'
})
export class NgbdDropdownBasic {
  public login:boolean = false;
  cargaMenu(id_usuario:number){
    if (id_usuario != null || id_usuario != undefined){
      this.login = true
    }
  }
  cerrarSesion(){
    this.login = false
  }
 
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public login:boolean = false;
  constructor(public loginService: LoginService) { }

  cargaMenu(id_usuario:number){
    if (id_usuario != null || id_usuario != undefined){
      this.login = true
    }
  }

  cerrarSesion(){
    let id_usuario = undefined
    this.login = false
  }


  ngOnInit(): void {
    let id_usuario = this.loginService.login.userId;
    console.log(id_usuario)
    this.cargaMenu(id_usuario)
    
  }
}
