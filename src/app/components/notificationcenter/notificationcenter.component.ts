import { Component } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import $ from 'jquery'

@Component({
  selector: 'app-notificationcenter',
  standalone: false,
  templateUrl: './notificationcenter.component.html',
  styleUrl: './notificationcenter.component.css'
})
export class NotificationcenterComponent {
  msg! : string;
  add(_msg:string, priority?: "normal" | "high"){}
  constructor(private notifcenter: NotificationsService){
    this.add = (msg: string, priority?: "normal" | "high") => {notifcenter.add(msg, priority); notifcenter.getNotifications()}
  }
}
