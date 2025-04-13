import { Injectable } from '@angular/core';
import { Notification } from '../interfaces/notification';
import { interval, Observable } from 'rxjs';
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
        delete(){
          setTimeout(() => {
            $(`#notif${this.id}`)
            // TUTAJ ZACZNIJ!!!!!!!
          }, 10000);
          return "";
        }
      }
    )
  }
  getNotifications() : Notification[] {
    return this.notifications
  }
}
