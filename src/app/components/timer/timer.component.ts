import { Component } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-timer',
  standalone: false,
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  time = 0;
  sub: any
  reset(){}
  constructor(private timer: TimerService, private notifications: NotificationsService) {
    this.sub = timer.interval.subscribe(val => this.time = val);
    this.reset = () => {
      this.sub.unsubscribe()
      this.time = 0
      notifications.add("Zresetowano timer", "high")
      this.sub = timer.interval.subscribe(val => this.time = val);
      this.sub.next(0)
    }
  }
}
