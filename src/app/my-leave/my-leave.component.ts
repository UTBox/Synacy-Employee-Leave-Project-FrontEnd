import { Component, OnInit } from '@angular/core';
import {MyLeaveService} from "./my-leave.service";
import {Subscription} from "rxjs";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.css']
})
export class MyLeaveComponent implements OnInit {
  employee: any;
  subscription: Subscription;
  employeeId : number;

  public leaveList;
  public loading;
  public hasError;

  constructor(private myLeaveService : MyLeaveService, private shared_service: SharedService) {
    this.subscription = this.shared_service.chosenEmployee.subscribe(it => {
      this.employee = it;
      this.employeeId = this.employee.id;
    });
  }

  ngOnInit(): void {
    this.getLeavesData(this.employeeId);
    console.log(this.leaveList);
  }

  getLeavesData(employeeId : number) {
    this.loading = true;
    this.myLeaveService.getMyLeave(employeeId).subscribe( (response) => {
      this.leaveList = response.content;
      console.log(response);
      }, (error) => {
      console.log(error);
      }
    ).add(() => {
      this.loading = false;
      });
  }
  cancelLeave(leaveId) {
    this.myLeaveService.cancelMyLeave(leaveId);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
