import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private logs: string[] = []
  log(msg: string = ""){
    this.logs.push("(" + (new Date()).toLocaleString() + ") " + msg)
  }
  getLogs(){
    return this.logs
  }
}
