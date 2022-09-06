import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ApplyLeaveService {

  constructor() {
  }

  inspectItemOnSubmit(leave: { startDate: Date, endDate: Date, reason: string, employeeId: number, manager: string }): boolean {
    if (leave.startDate == leave.endDate) {
      alert('Error: Both Start and End date and the same.');
      return false;
    } else if (leave.endDate < leave.startDate) {
      alert('Error: End date is before Start date.');
      return false;
    }
    return true;
  }

  getDayDiff(startDate: Date, endDate: Date): number {
    const msInDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay);
  }

  numberOfLeaveIsAllowed(appliedLeave: number, employeeAnnualLeave): boolean {
    if (appliedLeave > employeeAnnualLeave) {
      alert(`Error: You only have: ${employeeAnnualLeave} leaves. Please apply again.`);
      return false;
    }
    return true;
  }

}
