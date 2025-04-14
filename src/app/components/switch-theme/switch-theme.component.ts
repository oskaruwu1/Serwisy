import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-switch-theme',
  standalone: false,
  templateUrl: './switch-theme.component.html',
  styleUrl: './switch-theme.component.css'
})
export class SwitchThemeComponent {
  toggle(){}
  icons = {
    'sun': 'https://img.icons8.com/?size=100&id=648&format=png&color=B4AD00',
    'moon': 'https://img.icons8.com/?size=100&id=11377&format=png&color=B4AD00'
  }
  public getTheme(): string{return ""}
  constructor(private themeService : ThemeService, private notifications: NotificationsService){
    this.toggle = () => {themeService.toggle(); notifications.add(`Zmieniono motyw na <b>${themeService.getTheme()}</b>`, "normal")}
    this.getTheme = () => {return themeService.getTheme()}
  }
}
