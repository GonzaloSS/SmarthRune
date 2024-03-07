import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL} from '../../../constants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent implements OnInit {
  users: any = [];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<any>(API_URL + '/user').subscribe(async data => {
      await data.forEach((user: any) =>{
        this.users.push(user);
      });
  });
}

goToCreateUser() {
  this.router.navigate(['user/createUser']);
}
}
