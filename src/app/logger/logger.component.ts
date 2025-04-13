import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service'

@Component({
  selector: 'app-logger',
  standalone: false,
  templateUrl: './logger.component.html',
  styleUrl: './logger.component.css'
})
export class LoggerComponent {
  msg! : string;
  log(_msg:string){}
  constructor(logger: LoggerService){
    this.log = (msg) => {
      logger.log(msg)
      this.msg = ""
    }
  }
}
