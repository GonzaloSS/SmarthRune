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
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MyLevelComponent
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
    SpeedDialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
