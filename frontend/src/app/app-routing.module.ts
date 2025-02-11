import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyLevelComponent } from './my-level/my-level.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { ListCharactersComponent } from './characters/list-characters/list-characters.component';
import { CreateCharacterComponent } from './characters/create-character/create-character.component';
import { ListLevelsComponent } from './levels/list-levels/list-levels.component';
import { CreateLevelComponent } from './levels/create-level/create-level.component';
import { ListRosharCalendarComponent } from './rosharCalendar/list-roshar-calendar/list-roshar-calendar.component';
import { CreateRosharCalendarComponent } from './rosharCalendar/create-roshar-calendar/create-roshar-calendar.component';
import { BisumComponent } from './bisum/bisum.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'myLevel', component: MyLevelComponent},
  { path: 'inventory', component: InventoryComponent },
  { path: 'user/listUsers', component: ListUsersComponent},
  { path: 'user/createUser', component: CreateUserComponent},
  { path: 'character/listCharacters', component: ListCharactersComponent},
  { path: 'character/createCharacter', component: CreateCharacterComponent},
  { path: 'level/listLevels', component: ListLevelsComponent},
  { path: 'level/createLevel', component: CreateLevelComponent},
  { path: 'rosharCalendar/listAll', component: ListRosharCalendarComponent},
  { path: 'rosharCalendar/createRosharCalendar',component: CreateRosharCalendarComponent},
  { path: 'bisum', component: BisumComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
