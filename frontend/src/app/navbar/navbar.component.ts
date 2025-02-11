import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar } from 'primeng/sidebar';
import { MyLevelComponent } from '../my-level/my-level.component';
import { MenuItem, TreeNode } from 'primeng/api';
import { API_URL} from '../../constants';
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
      label: 'Calendario',
      data: 'User Calendar',
      icon: 'pi pi-fw pi-calendar',
    });
    this.files.push({
      key: '000',
      label: 'Monedas de Roshar',
      data: 'Converter',
      icon: 'pi pi-fw pi-dollar',
    });


    if (localStorage.getItem('google_info')){
      this.http.get<any>(API_URL+ '/isAdmin/' + this.userData['email']).subscribe(data => {
        localStorage.setItem('id', data[0].id);
        if (data[0].isAdmin === 1) {
          localStorage.setItem('isAdmin', "true");
          this.files.push(
            {
              key: 'admin',
              label: 'Configuración',
              data: 'Admin configuration',
              icon: 'pi pi-fw pi-user',
              children: [
                  {
                      key: 'A-1',
                      label: 'Users',
                      data: 'Work Folder',
                      icon: 'pi pi-fw pi-shopping-bag',
                      children: [
                        {
                          key: 'A-1.1',
                          label: 'List all users',
                          data: 'Work Folder',
                          icon: 'pi pi-fw pi-shopping-bag',
                  
                        },
                        {
                          key: 'A-1.2',
                          label: 'Create an user',
                          data: 'Work Folder',
                          icon: 'pi pi-fw pi-shopping-bag',
                  
                        },
                      ]
                  },
                  {
                    key:'A-2',
                    label: 'Characters',
                    data: 'Work Folder',
                    icon: 'pi pi-fw pi-sort-up',
                    children: [
                      {
                        key: 'A-2.1',
                        label: 'List all characters',
                        data: 'Work Folder',
                        icon: 'pi pi-fw pi-shopping-bag',
                
                      },
                      {
                        key: 'A-2.2',
                        label: 'Create a character',
                        data: 'Work Folder',
                        icon: 'pi pi-fw pi-shopping-bag',
                
                      },
                    ]
                  },
                  {
                      key: 'A-3',
                      label: 'Levels',
                      data: 'Home Folder',
                      icon: 'pi pi-fw pi-euro',
                      children: [
                        {
                          key: 'A-3.1',
                          label: 'List all levels',
                          data: 'Work Folder',
                          icon: 'pi pi-fw pi-shopping-bag',
                  
                        },
                        {
                          key: 'A-3.2',
                          label: 'Create a level',
                          data: 'Work Folder',
                          icon: 'pi pi-fw pi-shopping-bag',
                  
                        },
                      ]
                  },
                  {
                      key: 'A-4',
                      label: 'Bisums',
                      data: 'Home Folder',
                      icon: 'pi pi-fw pi-euro',
                      children: [
                        {
                          key: 'A-4.1',
                          label: 'Bisum history',
                          data: 'Work Folder',
                          icon: 'pi pi-fw pi-shopping-bag',
                  
                        }
                      ]
                  },
                  {
                      key: 'A-5',
                      label: 'Calendar',
                      data: 'Home Folder',
                      icon: 'pi pi-fw pi-euro',
                      children: [
                        {
                          key: 'A-5.1',
                          label: 'Create new event',
                          data: 'Work Folder',
                          icon: 'pi pi-fw pi-shopping-bag',
                  
                        }
                      ]
                  }
              ]
          }
          )
        } else {
          localStorage.setItem('isAdmin', "false");
        }
      });

      this.http.get<any>(API_URL+ '/getUserCharacters/' + this.userData['email']).subscribe(data => {
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
                  key: character['id']+'-1',
                  label: 'Estadísticas',
                  data: 'Work Folder',
                  icon: 'pi pi-fw pi-sort-up',
                },
                {
                    key: character['id']+'-0',
                    label: 'Inventario',
                    data: 'Work Folder',
                    icon: 'pi pi-fw pi-shopping-bag',
                },
                {
                    key: character['id']+'-2',
                    label: 'Monedero',
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
    if (event.node.label === 'Estadísticas') {
      this.goToInventory(event.node.parent.data);
    } else if (event.node.label === 'Inventario') {
      this.goToLevel(event.node.parent.data, this.characters);
    } else if (event.node.label === 'Monedero') {
      this.goToBisum(event.node.parent.data);
    } else if (event.node.label === 'Home') {
      this.router.navigate(['home']);
    } else if (event.node.key === 'A-1.1'){
      this.router.navigate(['user/listUsers']);
    } else if (event.node.key === 'A-1.2'){
      this.router.navigate(['user/createUser']);
    } else if (event.node.key === 'A-2.1'){
      this.router.navigate(['character/listCharacters']);
    } else if (event.node.key === 'A-2.2'){
      this.router.navigate(['character/createCharacter']);
    } else if (event.node.key === 'A-3.1'){
      this.router.navigate(['level/listLevels']);
    } else if (event.node.key === 'A-3.2'){
      this.router.navigate(['level/createLevel']);
    }
  }

  nodeUnselect(event: any) {
    
  }

  signOut() {
    localStorage.removeItem('google_info');
    localStorage.removeItem('isAdmin');
    this.router.navigate(['']);
  }

}
