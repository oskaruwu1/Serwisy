import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logs: string[] = []
  log(msg: string = ""){
    console.log("(" + (new Date()).toString() + ") " + msg)
    this.logs.push("(" + (new Date()).toString() + ") " + msg)
  }
  showLogs(){
    return this.logs
  }
}
