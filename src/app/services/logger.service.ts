import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private logs: string[] = []
  log(msg: string = ""){
    console.log("(" + (new Date()).toLocaleString() + ") " + msg)
    this.logs.push("(" + (new Date()).toLocaleString() + ") " + msg)
  }
  getLogs(){
    return this.logs
  }
}
