import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  public user = {
    id: 2,
    name: "Jose",
    user: "josejose",
    email: "jojojojose@gmail.com",
    img: "",
    preferences: ["futbol", "tenis", "baloncesto"],
    number: "123123123123",
    age: 23
  }

  constructor() { }

  ngOnInit(): void {
  }

}
