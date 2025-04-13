import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  private clicks: number = 0;
  increment(){
    this.clicks++;
  }
  getValue(){
    return this.clicks
  }
}
