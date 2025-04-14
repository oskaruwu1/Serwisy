import { Component } from '@angular/core';
import { ClickerService } from "../../services/clicker.service";
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-clicker',
  standalone: false,
  templateUrl: './clicker.component.html',
  styleUrl: './clicker.component.css'
})
export class ClickerComponent {
  inc(){}
  constructor(private clicker: ClickerService, private notifications: NotificationsService){
    this.inc = () => {
      clicker.increment()
      if (clicker.getValue() % 50 === 0 && clicker.getValue() % 250 !== 0){
        notifications.add(`Kliknąłeś ${clicker.getValue()} razy!`, "normal")
      }else if(clicker.getValue() % 250 === 0){
        notifications.add(`Kliknąłeś ${clicker.getValue()} razy!`, "high")
      }
    }
  }
}
