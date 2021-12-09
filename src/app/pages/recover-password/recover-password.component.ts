import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  public user:User;
  constructor(private toastr: ToastrService) {
    // this.user = new User();
   }
   showSuccess() {
    this.toastr.success('', 'Se ha enviado una nueva contraseña a tu correo',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  showError(){
    this.toastr.error('', 'El correo indicado no se encuentra en nuestros registros',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    console.log(this.user);
    
  }
  ngOnInit(): void {
  }

}
