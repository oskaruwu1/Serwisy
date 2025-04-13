import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ClickerComponent } from './components/clicker/clicker.component';
import { ShowClicksComponent } from './components/show-clicks/show-clicks.component';
import { LoggerComponent } from './components/logger/logger.component';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';
import { ShowThemeComponent } from './components/show-theme/show-theme.component';
import { TimerComponent } from './components/timer/timer.component';
import { NotificationcenterComponent } from './components/notificationcenter/notificationcenter.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickerComponent,
    ShowClicksComponent,
    LoggerComponent,
    SwitchThemeComponent,
    ShowThemeComponent,
    TimerComponent,
    NotificationcenterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
