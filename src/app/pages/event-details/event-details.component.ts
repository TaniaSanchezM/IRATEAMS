import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { EventosService } from '../../shared/eventos.service';
import { add } from 'date-fns';

import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';
import { LoginService } from '../../shared/login.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public event = {
    title: "Partido de futbol con amigos",
    sport: "FUTBOL",
    place: "MADRID",
    date: new Date(2021,11,5),
    people: 3,
    cost: true,
    material: true,
    description: "Buscamos a 3 personas para completar nuestro equipo de futbol para el proximo partido. Somos un equipo de gente de entre 18 y 27 años, blaaaaaaaa aaaa aaaa aaaa"
  }

  public creator = {
    id: 1,
    name: "Pepe",
    user: "pepe_98",
    img: ""
  }

  public user2 = {
    id: 1,
    name: "Jose",
    user: "josejose",
    img: ""
  }

  public apuntado = true;
  public loggin = true;
  public iduser = 1;
  public ideventcreator = 1;

  public today!: any
  public today2!: any
  public daysLeft!: number
  public eventSelected: any;

  public user: User 
  public id_usuario: number

  constructor(private toastr: ToastrService,public routeLocation: Location, private EventosService: EventosService, private loginService: LoginService) { 
    this.today = Date.now()
    this.today2 = new Date(2021,12,1)
    // this.daysLeft =  this.today2.getDate() -this.today.getDate()

    console.log(EventosService.eventoId)
    this.EventosService.getEvento().subscribe((data: any)=>
    {
      // this.events = data.resultado
      console.log(data.resultado[0]);
      this.eventSelected = data.resultado[0];

      

    })

    this.user=new User(0,"","","","",new Date(),"","")
    console.log(loginService.login.userId)
    this.id_usuario = this.loginService.login.userId;
    console.log(this.id_usuario)

  }
  public showLeave():void{
    this.toastr.error('', 'Has abandonado el evento',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  public showJoin():void {
    this.toastr.success('', 'Te has unido al evento',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  public goBack():void{
    this.routeLocation.back()
  }

  // showUser(id: number)
  // {
  //   this.apiService.getUser(id).subscribe((data: any) =>
  //   {
  //     this.user = data.resultado[0]
  //     this.dateStart = new Date(this.user.fechaNacimiento)
  //     this.day= this.dateStart.getDate()
  //     this.month=this.dateStart.getMonth()+1
  //     this.year=this.dateStart.getFullYear()

  //     this.date=  this.year.toString() +  "-" + this.month.toString()  + "-"  +  this.day.toString()

  //     console.log(this.user)    
  //   })
  // }

  // public getEvento()
  // {
  //   this.EventosService.getEvento().subscribe((data: any)=>
  //   {
  //     // this.events = data.resultado
  //     console.log(data.resultado);
  //     this.eventSelected = data.resultado[0];
      
  //   })
    
  // }
  // ngAfterViewInit(): void {
  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   //Add 'implements AfterViewInit' to the class.
  //   console.log(this.EventosService.eventoId)
  //   this.EventosService.getEvento().subscribe((data: any)=>
  //   {
      
  //     // this.events = data.resultado
  //     console.log(data.resultado[0]);
  //     this.eventSelected = data.resultado[0];

  //   })
  // }
  ngOnInit(): void {
    let id_usuario = this.loginService.login.userId;
    console.log(id_usuario)
    // this.showUser(id_usuario)
  }

}
