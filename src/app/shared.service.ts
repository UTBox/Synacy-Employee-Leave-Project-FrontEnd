import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private employeeSource = new BehaviorSubject(
    {id: 0, name: '', role: '', manager: '', annualLeave: 0, leaveBalance: 0});
  chosenEmployee = this.employeeSource.asObservable();


  constructor() {
  }

  changeEmployee(value: any) {
    this.employeeSource.next(value);
  }

}


