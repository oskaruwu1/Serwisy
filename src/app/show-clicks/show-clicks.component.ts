import { Component } from '@angular/core';
import { ClickerService } from "../services/clicker.service";

@Component({
  selector: 'app-show-clicks',
  standalone: false,
  templateUrl: './show-clicks.component.html',
  styleUrl: './show-clicks.component.css'
})
export class ShowClicksComponent {
  value! : number
  constructor(private clicker : ClickerService){
    setInterval(() => {
      this.value = clicker.getValue()
    }, 10);
  }
}
