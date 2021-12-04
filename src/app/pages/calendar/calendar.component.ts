import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

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

  public event1: any;
  public event2: any;
  public event3: any;
  public event4: any;
  public event5: any;

  public myEvents: any[];
  
  constructor() {
    moment.locale("es")
    this.today      = new Date();
    this.month      = this.today.getMonth() + 1
    this.event1     = {nombre:"partido de fútbol",      fecha: new Date(2021,11,30),  hora:"20:00", ubicacion:"calle falsa"}
    this.event2     = {nombre:"ruta en bici",           fecha: new Date(2021,11,25),  hora:"18:30", ubicacion:"calle falsa"}
    this.event3     = {nombre:"partido de pádel",       fecha: new Date(2021,11,21),  hora:"21:00", ubicacion:"calle falsa"}
    this.event4     = {nombre:"partido de baloncesto",  fecha: new Date(2021,11,18),  hora:"12:00", ubicacion:"calle falsa"}
    this.event5     = {nombre:"ruta senderismo",        fecha: new Date(2021,11,10),  hora:"19:00", ubicacion:"calle falsa"}
    this.myEvents   = [this.event1, this.event2, this.event1, this.event4, this.event5]
  }

  ngOnInit(): void {
    this.getDaysFromDate(this.today.getMonth() + 1, this.today.getFullYear())
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
      const dayObject = moment(`${year}-${month}-${a}`);
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

}
