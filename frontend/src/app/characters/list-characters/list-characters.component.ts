import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from '../../../constants';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrl: './list-characters.component.scss'
})
export class ListCharactersComponent {
  characters: any = [];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<any>(API_URL + '/character').subscribe(async data => {
      console.log(data)
      await data.forEach((character: any) =>{
        this.characters.push(character);
      });
  });
}

goToCreateCharacter () {
  this.router.navigate(['character/createCharacter']);
}
}
