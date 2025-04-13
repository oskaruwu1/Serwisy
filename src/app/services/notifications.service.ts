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
    this.notifications[this.notifications.length-1].delete()
    this.id++
    console.log(this.getNotifications())
  }
  getNotifications() : Notification[] {
    return this.notifications
  }
}
