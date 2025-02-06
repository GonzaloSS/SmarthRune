import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { API_URL } from '../../constants';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  rosharCalendar: any = [];

   constructor( private router: Router,
                 private http: HttpClient,
                 ) { }


  async ngOnInit(){
      this.http.get<any>(API_URL+ '/findEnabledRosharCalendar/').subscribe(data => {
        this.rosharCalendar = data[0]
      });
}
}
