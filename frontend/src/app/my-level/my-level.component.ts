import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar } from 'primeng/sidebar';
var character: any = undefined;
var characters: any = undefined;
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-my-level',
  templateUrl: './my-level.component.html',
  styleUrl: './my-level.component.scss'
})

export class MyLevelComponent implements OnInit {
  userData = JSON.parse(localStorage.getItem('google_info') || '{}');
  userPicture = this.userData['picture'];
  userName = this.userData['fullName'];

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
      this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
  
  level: any;
  percentage: any;
  c: any;
  cs: any;
  items: any;

  constructor( private router: Router,
               private http: HttpClient){}
  async retrieveCharacter(pj: any, pjs: any): Promise<void> {
    character = pj;
    characters = pjs;
  }



  async ngOnInit(): Promise<void> {
    if (character === undefined) {
      this.router.navigate(['home']);
    } else {
      this.items = [
        {
            icon: 'pi pi-pencil',
            command: () => {
               
            }
        },
        {
            icon: 'pi pi-refresh',
            command: () => {
               
            }
        },
        {
            icon: 'pi pi-trash',
            command: () => {
             
            }
        },
        {
            icon: 'pi pi-upload',
            routerLink: ['/fileupload']
        },
        {
            icon: 'pi pi-external-link',
            target: '_blank',
            url: 'http://angular.io'
        }
    ];

      this.c = character;
      this.cs = characters;
      console.log(this.cs);
      await this.http.get<any>('http://localhost:8080/api/getLevelInfo/'+ character.level).subscribe(data => {
        this.percentage = (character.experience / data[0].maxExp) * 100;
        this.level = data[0];
        console.log(this.level)
      })
    }
}

async goToInventory(id: number): Promise<void> {
    
}
async goToLevel(character: any): Promise<void> {
  
}
async goToBisum(id: number): Promise<void> {

}


}
