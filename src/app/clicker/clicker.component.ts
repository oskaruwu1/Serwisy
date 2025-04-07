import { Component } from '@angular/core';
import { ClickerService } from "../services/clicker.service";

@Component({
  selector: 'app-clicker',
  standalone: false,
  templateUrl: './clicker.component.html',
  styleUrl: './clicker.component.css'
})
export class ClickerComponent {
  inc(){}
  constructor(clicker: ClickerService){
    this.inc = () => {
      clicker.increment()
    }
  }
}
