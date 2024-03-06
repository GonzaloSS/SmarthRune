import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar } from 'primeng/sidebar';
import { HttpClient } from '@angular/common/http'
import { MyLevelComponent } from '../my-level/my-level.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
   userData = JSON.parse(localStorage.getItem('google_info') || '{}');
   userPicture = this.userData['picture'];
   userName = this.userData['fullName'];
   characters = [];
   options = [
    {name: "Inventory", onClick: "goToInventory({{character['id']}})}"},
    {name: "Level", onClick: "goToLevel({{character['id']}})}"},
   ]
      @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    closeCallback(e: Event): void {
        this.sidebarRef.close(e);
    }

    sidebarVisible: boolean = false;

  constructor( private router: Router,
               private http: HttpClient,
               private myLevel: MyLevelComponent) { }
  async ngOnInit(): Promise<void> {
    if (localStorage.getItem('google_info')){
      await this.http.get<any>('http://localhost:8080/api/getUserCharacters/'+ this.userData['email']).subscribe(data => {
        this.characters = data;
     },error => error = error);
    } else {
      this.router.navigate(['']);
    }
  }



  async goToInventory(id: number): Promise<void> {
    
  }
  async goToLevel(character: any, characters: any): Promise<void> {
    await this.myLevel.retrieveCharacter(character, characters)
    this.router.navigate(['myLevel']);
  }
  async goToBisum(id: number): Promise<void> {

  }
}
