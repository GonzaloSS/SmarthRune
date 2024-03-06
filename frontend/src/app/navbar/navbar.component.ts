import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar } from 'primeng/sidebar';
import { MyLevelComponent } from '../my-level/my-level.component';
import { MenuItem, TreeNode } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  userData = JSON.parse(localStorage.getItem('google_info') || '{}');
  userPicture = this.userData['picture'];
  userName = this.userData['fullName'];


  characters = [];
     @ViewChild('sidebarRef') sidebarRef!: Sidebar;

   closeCallback(e: Event): void {
       this.sidebarRef.close(e);
   }

   sidebarVisible: boolean = false;


   files: TreeNode[] = [];

   selectedFile!: TreeNode;
   
   constructor( private router: Router,
    private http: HttpClient,
    private myLevel: MyLevelComponent) { }
    
   async ngOnInit(): Promise<void> {
    this.files.push({
      key: '00',
      label: 'Home',
      data: 'Home',
      icon: 'pi pi-fw pi-home',
    });
    this.files.push({
      key: '0',
      label: 'Calendar',
      data: 'User Calendar',
      icon: 'pi pi-fw pi-calendar',
    });
    this.files.push({
      key: '000',
      label: 'Currency converter',
      data: 'Converter',
      icon: 'pi pi-fw pi-dollar',
    });


    if (localStorage.getItem('google_info')){
      this.http.get<any>('http://localhost:8080/api/getUserCharacters/' + this.userData['email']).subscribe(data => {
        this.characters = data;
        this.characters.forEach(character => {
          this.files.push(
            {
              key: character['id'],
              label: character['name'],
              data: character,
              icon: 'pi pi-fw pi-user',
              children: [
                  {
                      key: character['id']+'-0',
                      label: 'Inventory',
                      data: 'Work Folder',
                      icon: 'pi pi-fw pi-shopping-bag',
                  },
                  {
                    key: character['id']+'-1',
                    label: 'Level',
                    data: 'Work Folder',
                    icon: 'pi pi-fw pi-sort-up',
                  },
                  {
                      key: character['id']+'-2',
                      label: 'Bisum',
                      data: 'Home Folder',
                      icon: 'pi pi-fw pi-euro',
                  }
              ]
          }
          )
        })


      }, error => error = error);
    } else {
      this.router.navigate(['']);
    }
  }
   async goToInventory(id: number): Promise<void> {
    
   }
   async goToLevel(character: any, characters: any): Promise<void> {
    await this.myLevel.retrieveCharacter(character, characters)
    
    this.router.navigate(['myLevel'], { skipLocationChange: true});
    
   }
   async goToBisum(id: number): Promise<void> {
 
   }


  nodeExpand(event: any) {
   
  }

  nodeCollapse(event: any) {
    
  }

  nodeSelect(event: any) {
    if (event.node.label === 'Inventory') {
      this.goToInventory(event.node.parent.data);
    } else if (event.node.label === 'Level') {
      this.goToLevel(event.node.parent.data, this.characters);
    } else if (event.node.label === 'Bisum') {
      this.goToBisum(event.node.parent.data);
    } else if (event.node.label === 'Home') {
      this.router.navigate(['home']);
    }
  }

  nodeUnselect(event: any) {
    
  }

  signOut() {
    localStorage.removeItem('google_info');
    this.router.navigate(['']);
  }

}
