import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


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
    number: "123123123123",
    age: 23
  }

  constructor(private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('', 'Perfil actualizado',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  showError(){
    this.toastr.error('', 'Error al actualizar el perfil',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  ngOnInit(): void {
  }

}
