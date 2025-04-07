import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ClickerComponent } from './clicker/clicker.component';
import { ShowClicksComponent } from './show-clicks/show-clicks.component';
import { LoggerComponent } from './logger/logger.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickerComponent,
    ShowClicksComponent,
    LoggerComponent
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
