import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  public page:number = 0
  constructor() { }

  ngOnInit(): void {
  }

  nextPage(){
    this.page += 1
  }
  prevPage(){
    this.page -= 1
  }
}
