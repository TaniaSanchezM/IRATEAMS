import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SoporteService } from '../../shared/soporte.service';

@Component({
  selector: 'app-tech-support',
  templateUrl: './tech-support.component.html',
  styleUrls: ['./tech-support.component.css']
})
export class TechSupportComponent implements OnInit {

  constructor(private toastr: ToastrService, private support:SoporteService) { }
  showSuccess() {
    
  }
  ngOnInit(): void {
  }
  submitTicket(mail:string,question:string):void{
    this.support.newSupport(mail,question).subscribe((data:any)=>{
      if (data.error) {
        this.toastr.error('', data.msg ,{timeOut:2000, positionClass:"toast-top-full-width"});
      } else {
        this.toastr.success('', data.msg,{timeOut:2000, positionClass:"toast-top-full-width"});
      }
    });
  }

}
