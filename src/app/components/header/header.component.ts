import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './header.component.html'
})
export class NgbdDropdownBasic {
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
