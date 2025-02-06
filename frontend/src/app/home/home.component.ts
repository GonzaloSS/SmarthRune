import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Sidebar } from 'primeng/sidebar';
import { HttpClient } from '@angular/common/http'
import { MyLevelComponent } from '../my-level/my-level.component';
import { API_URL } from '../../constants';
import { ProgressBarModule } from 'primeng/progressbar';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
   visible: boolean = false;
   userData = JSON.parse(localStorage.getItem('google_info') || '{}');
   userPicture = this.userData['picture'];
   userName = this.userData['fullName'];
   characters: any = [];
   character: any= {};
   progress: any;
   moneyInventory: any = [];
   rosharCalendar: any = [];

   view: CalendarView = CalendarView.Month;

   CalendarView = CalendarView;
 
   viewDate: Date = new Date();
   
   events: CalendarEvent[] = [
    {
      start: new Date(2025, 1, 13), // Month is zero-indexed (1 = February)
      title: 'Nuevo arco',
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
      },
      allDay: true, // Event will span the whole day
    }
   ];
  constructor( private router: Router,
               private http: HttpClient,
               private myLevel: MyLevelComponent) { }
  async ngAfterViewInit(): Promise<void> {
    this.http.get<any>(API_URL+ '/character/user/' + localStorage.getItem('id')).subscribe(data => {
      this.characters = data;
    });
  }



  async goToInventory(id: number): Promise<void> {
    
  }
  async goToLevel(character: any, characters: any): Promise<void> {
    await this.myLevel.retrieveCharacter(character, characters)
    this.router.navigate(['myLevel']);
  }
  async goToBisum(id: number): Promise<void> {

  }

  // Función para obtener el tamaño de la imagen basado en el valor de "coin"
  getImageSize(coin: number): string {
    const baseSize = 150;
    return `${baseSize + coin / 5}px`;  // Aumenta el tamaño según el valor de coin
  }

  // Función para obtener el tamaño de la fuente basado en el valor de "coin"
  getFontSize(coin: number): string {
    const baseFontSize = 1.2;  // Tamaño base en em
    return `${baseFontSize + coin / 100}px`;  // Aumenta el tamaño de la fuente según el valor de coin
  }


  openModal(character: any) {
    this.moneyInventory = [];
    this.character = character
    this.moneyInventory.push({
      name: "Frag",
      coin: character.frag
    });
    this.moneyInventory.push({
      name: "Frost",
      coin: character.frost
    }); 
    this.moneyInventory.push({
      name: "Broam",
      coin: character.broam
    });
    this.moneyInventory.push({
      name: "Gran Frag",
      coin: character.grandFrag
    });
    this.moneyInventory.push({
      name: "Ruck",
      coin: character.ruck
    });

    this.http.get<any>(API_URL+ '/getLevelInfo/' + character.level).subscribe(data => {
      this.progress = (parseInt(character.experience) / parseInt(data[0].maxExp) * 100);
    }); 
    this.visible = true;
  }
}
