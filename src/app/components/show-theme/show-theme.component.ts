import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-show-theme',
  standalone: false,
  templateUrl: './show-theme.component.html',
  styleUrl: './show-theme.component.css'
})
export class ShowThemeComponent {
  public getTheme(): string{return ""}
  icons = {
    'sun': 'https://img.icons8.com/?size=30&id=9313&format=png&color=000000',
    'moon': 'https://img.icons8.com/?size=30&id=11404&format=png&color=B4AD00'
  }
  constructor(private themeService: ThemeService){
    this.getTheme = () => {return themeService.getTheme()}
  }
}
