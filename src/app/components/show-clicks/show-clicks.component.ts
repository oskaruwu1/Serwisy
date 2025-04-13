import { Component } from '@angular/core';
import { ClickerService } from "../../services/clicker.service";

@Component({
  selector: 'app-show-clicks',
  standalone: false,
  templateUrl: './show-clicks.component.html',
  styleUrl: './show-clicks.component.css'
})
export class ShowClicksComponent {
  public getClicks():number{return 0}
  constructor(private clicker : ClickerService){
    setInterval(() => {
      this.getClicks = () => {return clicker.getValue()}
    }, 10);
  }
}
