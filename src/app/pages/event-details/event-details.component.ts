import { Component, OnInit } from '@angular/core';

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
    material: false,
    description: "Buscamos a 3 personas para completar nuestro equipo de futbol para el proximo partido. Somos un equipo de gente de entre 18 y 27 años, blaaaaaaaa aaaa aaaa aaaa"
  }

  public creator = {
    id: 1,
    name: "Pepe",
    user: "pepe_98",
    img: ""
  }

  public user = {
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
  public daysLeft!: Number

  constructor() { 
    this.today = new Date()
    this.today2 = new Date(2021,12,1)
    this.daysLeft =  this.today2.getDate() -this.today.getDate()
  }

  ngOnInit(): void {
  }

}
