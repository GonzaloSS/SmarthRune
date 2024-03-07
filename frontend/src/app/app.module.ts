import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { HomeComponent } from './home/home.component';
import { BadgeModule } from 'primeng/badge';
import { SidebarModule } from 'primeng/sidebar';
import {PanelModule} from 'primeng/panel';
import { HttpClientModule } from '@angular/common/http';
import { MyLevelComponent } from './my-level/my-level.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { SpeedDialModule } from 'primeng/speeddial';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TreeModule } from 'primeng/tree';
import { ToolbarModule } from 'primeng/toolbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { NavbarComponent } from './navbar/navbar.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ListCharactersComponent } from './characters/list-characters/list-characters.component';
import { CreateCharacterComponent } from './characters/create-character/create-character.component';
import { ListLevelsComponent } from './levels/list-levels/list-levels.component';
import { CreateLevelComponent } from './levels/create-level/create-level.component';
import { CreateRosharCalendarComponent } from './rosharCalendar/create-roshar-calendar/create-roshar-calendar.component';
import { ListRosharCalendarComponent } from './rosharCalendar/list-roshar-calendar/list-roshar-calendar.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MyLevelComponent,
    NavbarComponent,
    InventoryComponent,
    ListUsersComponent,
    CreateUserComponent,
    ListCharactersComponent,
    CreateCharacterComponent,
    ListLevelsComponent,
    CreateLevelComponent,
    CreateRosharCalendarComponent,
    ListRosharCalendarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    SidebarModule,
    BadgeModule,
    PanelModule,
    ProgressBarModule,
    ToastModule,
    ImageModule,
    CardModule,
    SpeedDialModule,
    TieredMenuModule,
    TreeModule,
    ToolbarModule,
    TableModule,
    DividerModule,
    InputGroupModule,
    InputGroupAddonModule,
    ReactiveFormsModule,
    CheckboxModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
