import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';
import { LoginService } from '../../shared/login.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // public user = {
  //   id: 2,
  //   name: "Jose",
  //   user: "josejose",
  //   email: "jojojojose@gmail.com",
  //   img: "",
  //   preferences: ["futbol", "tenis", "baloncesto"],
  //   number: "123123123123",
  //   age: 23
  // }

  public user: User = new User

    constructor(private toastr: ToastrService, private apiService: UsersService, private loginService: LoginService) { }

  showSuccess() {
    this.toastr.success('', 'Perfil actualizado',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  showError(){
    this.toastr.error('', 'Error al actualizar el perfil',{timeOut:4000, positionClass:"toast-top-full-width"});
  }

  showUser(id: number)
  {
    this.apiService.getUser(id).subscribe((data: any) =>
    {
      this.user = data.resultado[0]
      this.user.fechaNacimiento.toLocaleDateString()
    })
  }

  // changeProfile(nombrecompleto:string, username:string,  fechaNacimiento:string, telefono: string, mail: string, password: string, repeatPassword:string) {
  //   this.apiService.putUser(new User(nombrecompleto, username,  fechaNacimiento, telefono, mail, password,  repeatPassword).subscribe((data: any) =>
  //   {
  //     this.user = data.resultado[0]
  //     this.showSuccess()
  //   })
  // }

  ngOnInit(): void {
    this.showUser(5)

  }

}
