import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';
import { LoginService } from '../../shared/login.service';
import { RegisterService } from 'src/app/shared/register.service';
// import { Register } from 'src/app/models/register';
// import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: User 
  public day: number
  public month: number
  public year: number
  public dateStart: Date
  public date: string
  // public userData:Register;
  public newpass: string

    constructor(private toastr: ToastrService, private apiService: UsersService, public loginService: LoginService, public registerService:RegisterService) {
      this.user=new User(0,"","","","",new Date(),"","")
      console.log(loginService.login.userId)
      // this.loginService = loginService
      this.newpass =""
     }

  showSuccess() {
    this.toastr.success('', 'Perfil actualizado',{timeOut:2000, positionClass:"toast-top-full-width"});
  }
  showError(){
    this.toastr.error('', 'Error al actualizar el perfil',{timeOut:2000, positionClass:"toast-top-full-width"});
  }

  showUser(id: number)
  {
    this.apiService.getUser(id).subscribe((data: any) =>
    {
      this.user = data.resultado[0]
      if(this.user.urlFoto == null || this.user.urlFoto == ''){
        this.user.urlFoto = '../../../assets/img/fotoPerfilUsuario.jpg'
      }
      this.dateStart = new Date(this.user.fechaNacimiento)
      this.day= this.dateStart.getDate()
      this.month=this.dateStart.getMonth()+1
      this.year=this.dateStart.getFullYear()

      this.date=  this.year.toString() +  "-" + this.month.toString()  + "-"  +  this.day.toString()

      console.log(this.user)    
    })
  }

  changeProfile(urlFoto: string, nombreCompleto:string, username:string,  fechaNacimiento:string, telefono: string, mail: string, password: string, newPassword:string, repeatnewpass:string) {
    if ((this.loginService.login.password === password) && (newPassword != "" && newPassword === repeatnewpass))
    {
      password = newPassword
      let id_usuario = this.loginService.login.userId;
      let usuario = new User (id_usuario, username, mail, password, nombreCompleto, new Date(fechaNacimiento), telefono, urlFoto)
      console.log(usuario)
      this.apiService.putUser(usuario).subscribe((data: any) =>
      {
        console.log(data)
        this.showUser(id_usuario)     
      })
      this.showSuccess()
    }
    else if ((this.loginService.login.password === password) && (newPassword === "" && newPassword === repeatnewpass))
    {
      let id_usuario = this.loginService.login.userId;
      
      let usuario = new User (id_usuario, username, mail, password, nombreCompleto, new Date(fechaNacimiento), telefono, urlFoto)
      console.log(usuario)
      this.apiService.putUser(usuario).subscribe((data: any) =>
      {
        console.log(data)
        this.showUser(id_usuario)     
      })
      this.showSuccess()
    // } else {
    //   this.toastr.error('', 'Las nuevas contrase??as no coinciden',{timeOut:4000, positionClass:"toast-top-full-width"})
    
    } else {
      this.showError()
    }
  }


  ngOnInit(): void {
    let id_usuario = this.loginService.login.userId;
    console.log(id_usuario)
    this.showUser(id_usuario)

  }

}
