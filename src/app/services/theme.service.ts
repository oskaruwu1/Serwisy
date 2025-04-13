import { Injectable } from '@angular/core';
import $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string = 'light';
  toggle(){
    $("body").removeClass(this.theme)
    this.theme = (this.theme === 'light' ? 'dark' : 'light');
    $("body").addClass(this.theme)
  }
  getTheme(){
    return this.theme;
  }
}
