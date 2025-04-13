import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import $ from 'jquery';

@Component({
  selector: 'app-logger',
  standalone: false,
  templateUrl: './logger.component.html',
  styleUrl: './logger.component.css'
})
export class LoggerComponent {
  msg! : string;
  logs! : string[]
  log(_msg:string){}
  displayLogs(){}
  constructor(private logger: LoggerService){
    this.log = (msg) => {
      logger.log(msg)
      this.msg = ""
      this.displayLogs()
    }
    this.displayLogs = () => {
      $("#logs").html("")
      
      for (let log of logger.getLogs()){
        console.log(log)
        $("#logs").html($("#logs").html() + `<span>${log}</span><br>`)
      }
    }
  }
}
