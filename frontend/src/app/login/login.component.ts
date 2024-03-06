declare var google: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '558420591514-4up3f1kuqjtgucrck5rpvokdgt4iola0.apps.googleusercontent.com',
      callback: (response: any) => {
        this.onSignInGSI(response);
        this.router.navigate(['home']);
      }
  });
  
  google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'outline',
      size: 'rectangular',
      type: "icon"
  });


}

 decodeJwtResponseFromGoogleAPI(token: any) {
  let base64Url = token.split('.')[1]
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  let jsonPayload = 
 decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + 
 c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload)
}


 onSignInGSI(response: any) {
  const responsePayload = this.decodeJwtResponseFromGoogleAPI(response.credential);
  var info = {id: responsePayload.sub, fullName: responsePayload.name, email: responsePayload.email, picture: responsePayload.picture, givenName: responsePayload.given_name, familyName: responsePayload.family_name}
  localStorage.setItem('google_info', JSON.stringify(info));
}


}
