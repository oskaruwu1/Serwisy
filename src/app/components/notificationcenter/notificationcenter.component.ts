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
  getNotifications(){}
  constructor(private notifcenter: NotificationsService){
    this.add = (msg: string, priority?: "normal" | "high") => {notifcenter.add(msg, priority); this.getNotifications()}
    this.getNotifications = () => {
      $('#center').html('')
      for (let item of notifcenter.getNotifications()) {
        if (item.alive) {
          $('#center').html($('#center').html() + `<div class="${item.priority}" id="notif${item.id}">${item.message}</div>`)
        }
      }
      $('#center').children().last().css("animation", "loadIn 350ms forwards")
    }
  }
}
