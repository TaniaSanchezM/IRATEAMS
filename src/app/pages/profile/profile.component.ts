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

  public user: User 
  public day: number
  public month: number
  public year: number
  public dateStart: Date
  public date: string

    constructor(private toastr: ToastrService, private apiService: UsersService, private loginService: LoginService) {
      this.user=new User(0,"","","","",new Date(),"","")
     }

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
      this.dateStart = new Date(this.user.fechaNacimiento)
      this.day= this.dateStart.getDate()
      this.month=this.dateStart.getMonth()+1
      this.year=this.dateStart.getFullYear()

      this.date=  this.year.toString() +  "-" + this.month.toString()  + "-"  +  this.day.toString()

      console.log(this.user)    
    })
  }

  changeProfile(urlFoto: string, nombreCompleto:string, username:string,  fechaNacimiento:string, telefono: string, mail: string, password: string, newPassword:string) {
    let id_usuario = 5;
    let usuario = new User (id_usuario, username, mail, password, nombreCompleto, new Date(fechaNacimiento), telefono, urlFoto)
    console.log(usuario)
    this.apiService.putUser(usuario).subscribe((data: any) =>
    {
      console.log(data)
      this.showUser(5)     
    })
    this.showSuccess()
    
    
  }

  ngOnInit(): void {
    this.showUser(5)

  }

}
