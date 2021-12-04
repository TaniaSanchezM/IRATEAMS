import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tech-support',
  templateUrl: './tech-support.component.html',
  styleUrls: ['./tech-support.component.css']
})
export class TechSupportComponent implements OnInit {

  constructor(private toastr: ToastrService) { }
  showSuccess() {
    this.toastr.success('', 'Mensaje enviado correctamente',{timeOut:4000, positionClass:"toast-top-full-width"});
  }
  ngOnInit(): void {
  }

}
