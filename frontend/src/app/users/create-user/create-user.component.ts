import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { API_URL } from '../../../constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent implements OnInit {
  userForm: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router){}
  ngOnInit() {
    this.userForm = this.fb.group({
      email: new FormControl(''),
      isAdmin: new FormControl(false)
    });
  }

  newUser(userForm: any) {
    if (userForm.value.isAdmin[0] === undefined) {
      userForm.value.isAdmin = false;
    } else {
      userForm.value.isAdmin = true;
    }
    
   this.http.post<any>(API_URL + '/createUser', {
     email: userForm.value.email,
     isAdmin: userForm.value.isAdmin
   }).subscribe(data => {
     this.router.navigate(['user/listUsers']);
   });
  }

}
