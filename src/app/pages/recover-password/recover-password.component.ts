import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user';
import { Recover } from '../../models/recover';
import { RecoveryPasswordService } from '../../shared/recovery-password.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  public recover:Recover;
  constructor(private toastr: ToastrService, private recoveryService:RecoveryPasswordService) {
    this.recover = new Recover();
   }
   showSuccess() {
    this.toastr.success('', 'Se ha enviado una nueva contraseña a tu correo',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  showError(){
    this.toastr.error('', 'El correo indicado no se encuentra en nuestros registros',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  public recoveryPassword(mail){
    this.recoveryService.recoverPass(mail).subscribe((data:any)=>{
      debugger
      if(data.msg = "Se ha enviado un correo con la contraseña"){
        console.log(data)
        this.showSuccess();
      } else {
        this.showError();
      }
    });
  }
  ngOnInit(): void {
  }

}
