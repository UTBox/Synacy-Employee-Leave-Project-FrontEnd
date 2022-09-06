import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {SharedService} from "../shared.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApplyLeaveService} from "./apply-leave.service";

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  public leaveFormGroup: FormGroup;

  employee: any;
  subscription: Subscription;

  protected startDate: string;
  protected endDate: string;
  protected displayNumberOfDaysLeave: number = 0;

  protected leave_object: any;


  constructor(private shared_service: SharedService,
              private applyLeave_service: ApplyLeaveService) {

    this.subscription = this.shared_service.chosenEmployee.subscribe(it => {
        this.employee = it
      }
    );

    console.log(this.employee);

    this.leaveFormGroup = new FormGroup({
      start_date: new FormControl(),
      end_date: new FormControl(),
      leave_reason: new FormControl('', [Validators.required])
    });

  }

  ngOnInit(): void {
  }


  calculateTotalDaysAndDisplay(): void {
    let daysLeave = (start: string, end: string) => {
      const startDate = new Date(start);
      const endDate = new Date(end);
      return this.applyLeave_service.getDayDiff(startDate, endDate);
    };
    this.displayNumberOfDaysLeave = daysLeave(this.startDate, this.endDate);
  }

  numberOfLeaveIsAllowed(): boolean {
    if (this.displayNumberOfDaysLeave > this.employee.annualLeave) {
      alert(`Error: You only have: ${this.employee.annualLeave} leaves. Please apply again.`);
      return false;
    }
    return true;
  }

  submitLeaveApplication(leaveForm: FormGroup) {
    let leave: { startDate: Date, endDate: Date, reason: string, employeeId: number, manager: string };
    leave = {
      startDate: leaveForm.controls['start_date'].value,
      endDate: leaveForm.controls['end_date'].value,
      reason: leaveForm.controls['leave_reason'].value,
      employeeId: this.employee.id,
      manager: this.employee.manager
    };

    if (this.applyLeave_service.inspectItemOnSubmit(leave) == true &&
      this.numberOfLeaveIsAllowed() == true) {
      /**write code for post request here*/
    } else {
      console.log('error!!');
    }
  }


}
