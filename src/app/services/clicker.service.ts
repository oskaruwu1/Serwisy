import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  clicks: number = 0;
  increment(){
    this.clicks += 1;
    this.getValue()
  }
  getValue(){
    return this.clicks
  }
}
