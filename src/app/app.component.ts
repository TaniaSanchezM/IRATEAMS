import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'irateams';

  constructor(public routeLocation: Location, public loginService: LoginService){}
}
