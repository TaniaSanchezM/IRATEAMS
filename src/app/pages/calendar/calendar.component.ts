import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Event } from 'src/app/models/events';
import { EventosService } from 'src/app/shared/eventos.service';
import { CalendarService } from '../../shared/calendar.service';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  week: any = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
  ];




  monthSelect!: any[];
  dateSelect: any;
  dateValue: any;

  public today: Date;
  public month: number;

  public myEvents: Event[];
  public fechas: Date[];
  
  constructor(public calendarService: CalendarService, public loginService:LoginService,  public homeService: EventosService) {
    moment.locale("es")
    this.today      = new Date();
    this.month      = this.today.getMonth() + 1
  }

  ngOnInit(): void {
    this.getDaysFromDate(this.today.getMonth() + 1, this.today.getFullYear());
    this.myEventsList();
  }

  getDaysFromDate(month: any, year: any) {
    const today = Date.now(); 
    const startDate = moment.utc(`${year}/${month}/01`)
    startDate.locale("es")
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`, 'YYYY-MM-DD');
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });

    this.monthSelect = arrayDays;
  }

  changeMonth(flag: number) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.month = parseInt(prevDate.format("MM"));
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.month = parseInt(nextDate.format("MM"));
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day: any) {
    const monthYear = this.dateSelect.format('YYYY-MM')
    console.log(monthYear);

    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;
  }

  getIdEvento(id: number)
  {
    console.log(id)
    this.homeService.eventoId = id;
    console.log(this.homeService.eventoId)
  }

  myEventsList(){
    let id_usuario = this.loginService.login.userId;
    this.calendarService.getCalendar(id_usuario).subscribe((data:any)=>
    {
      if(data == null){
        this.myEvents = [];
      } else {
        this.myEvents = data.resultado;
      }
    });   
  }
  isEvent(day:number,month:number):boolean{
    let res:boolean;
    if(this.loginService.login.userId == undefined || this.myEvents.length == 0){
      res = false;
    } else{
      let i = 0;
      let marked = false;
      while (i < this.myEvents.length && marked == false) {
        if(new Date(this.myEvents[i].fecha).getDate() === day && new Date(this.myEvents[i].fecha).getMonth()+1 === month){
          res = true;
          marked = true
        }
        i++
      }
    }
    return res;
  }
}
