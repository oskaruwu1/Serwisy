import { Injectable } from '@angular/core';
import { Notification } from '../interfaces/notification';
import $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notifications: Notification[] = []
  private id = 0;
 
  add(message: string, priority?: "normal" | "high") {
    if (!priority) priority = "normal";
    this.notifications.push(
      {
        id: this.id,
        message: message,
        priority: priority,
        alive: true,
        delete(){
          setTimeout(() => {
            $(`#notif${this.id}`).css("animation", "loadOut 350ms forwards")
            this.alive = false;
            setTimeout(() => {
              $(`#notif${this.id}`).remove()
            }, 350);
          }, 10000);
          return 1;
        }
      }
    )

    $('#center').html('')
    for (let item of this.getNotifications()) {
      if (item.alive) {
        $('#center').html($('#center').html() + `<div class="${item.priority}" id="notif${item.id}">${item.message}</div>`)
      }
    }
    $('#center').children().last().css("animation", "loadIn 350ms forwards")

    this.notifications[this.notifications.length-1].delete()
    this.id++
  }
  getNotifications() : Notification[] {
    return this.notifications
  }
}
