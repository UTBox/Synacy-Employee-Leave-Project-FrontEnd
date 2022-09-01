import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private receiveEmployeeId = new BehaviorSubject(0);
  employeeId = this.receiveEmployeeId.asObservable();

  private receiveEmployeeName = new BehaviorSubject('');
  employeeName = this.receiveEmployeeName.asObservable();

  private receiveEmployeeRole = new BehaviorSubject('');
  employeeRole = this.receiveEmployeeRole.asObservable();

  private receiveEmployeeManager = new BehaviorSubject(0);
  employeeManager = this.receiveEmployeeManager.asObservable();

  private receiveEmployeeLeave = new BehaviorSubject(0);
  employeeLeave = this.receiveEmployeeLeave.asObservable();

  constructor() {
  }

  changeEmployeeId(id: number) {
    this.receiveEmployeeId.next(id);
  }

  changeEmployeeName(name: string) {
    this.receiveEmployeeName.next(name);
  }

  changeEmployeeRole(role: string) {
    this.receiveEmployeeRole.next(role);
  }

  changeEmployeeManager(manager: number) {
    this.receiveEmployeeManager.next(manager);
  }

  changeEmployeeLeave(leave: number) {
    this.receiveEmployeeLeave.next(leave);
  }
}

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
//
// @Injectable()
// export class DataService {
//
//   private messageSource = new BehaviorSubject('default message');
//   currentMessage = this.messageSource.asObservable();
//
//   constructor() { }
//
//   changeMessage(message: string) {
//     this.messageSource.next(message)
//   }
//
// }
