import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from '../../../constants';

@Component({
  selector: 'app-list-levels',
  templateUrl: './list-levels.component.html',
  styleUrl: './list-levels.component.scss'
})
export class ListLevelsComponent {
  levels: any = [];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<any>(API_URL + '/level').subscribe(async data => {
      await data.forEach((level: any) =>{
        this.levels.push(level);
      });
  });
}

goToCreateLevel() {
  this.router.navigate(['level/createLevel']);
}
}
