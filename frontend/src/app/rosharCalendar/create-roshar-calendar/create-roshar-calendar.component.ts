import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { API_URL, DAYS, MONTH, WEATHER} from '../../../constants';
@Component({
  selector: 'app-create-roshar-calendar',
  templateUrl: './create-roshar-calendar.component.html',
  styleUrl: './create-roshar-calendar.component.scss'
})
export class CreateRosharCalendarComponent implements OnInit {
  rosharCalendarForm: any;

  months: any;
  selectedMonth: any;
  days: any;
  selectedDay: any;
  weather: any;
  selectedWeather: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router){}
  ngOnInit() {
    this.months = MONTH;
    this.days = DAYS;
    this.weather = WEATHER;
    this.rosharCalendarForm = this.fb.group({
      day: new FormControl(''),
      initials: new FormControl(''),
      place: new FormControl(''),
      weather: new FormControl(''),
      isEnabled: new FormControl(true)
    });
  }

  newRosharCalendar(form: any){
    this.http.post<any>(API_URL + '/rosharCalendar', {
      day: form.value.day.day,
      month: form.value.initials.initials,
      place: form.value.place,
      weather: form.value.weather.name,
      isEnabled: form.value.isEnabled
    }).subscribe(data => {
      this.router.navigate(['rosharCalendar/listAll']);
    });
  }
}
