import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApplyLeaveService {

  private readonly CONTENT_TYPE = 'application/json';

  constructor(private http: HttpClient) {
  }

  persistLeave(leaveBody: { startDate: Date, endDate: Date, reason: string, employeeId: number }) {
    console.log(leaveBody);
    const headers = new HttpHeaders({'Content-Type': this.CONTENT_TYPE});
    return this.http.post(`http://localhost:8080/api/v1/leave`, leaveBody, {headers: headers}).subscribe((response) => {
      console.log(response);
      alert("Leave filled successfully.");
    });

  }


  inspectItemOnSubmit(leave: { startDate: Date, endDate: Date, reason: string, employeeId: number }): boolean {
    if (leave.endDate < leave.startDate) {
      alert('Error: End date is before Start date.');
      return false;
    } else if (leave.reason == '') {
      alert('Error: Reason field has no content. Please include a reason on leave application and try again.');
      return false;
    } else if (leave.endDate == null || leave.startDate == null){
      alert('Error: There is no Start or End Date. Please include start and end date on leave application and try again.');
      return false
    }
    return true;
  }

  getDayDiff(startDate: Date, endDate: Date): number {
    const msInDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay) + 1;
  }

  numberOfLeaveIsAllowed(appliedLeave: number, employeeAnnualLeave): boolean {
    if (appliedLeave > employeeAnnualLeave) {
      alert(`Error: You only have: ${employeeAnnualLeave} leaves. Please apply again.`);
      return false;
    }
    return true;
  }

}
