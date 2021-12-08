import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user = {
    id: 2,
    name: "Jose",
    user: "josejose",
    email: "jojojojose@gmail.com",
    img: "",
    preferences: ["futbol", "tenis", "baloncesto"],
    number: "123123123",
    age: 23
  }

  constructor() { }

  ngOnInit(): void {
  }

}
