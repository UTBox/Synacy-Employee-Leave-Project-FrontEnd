import { Component, OnInit } from '@angular/core';
import {AllLeaveService} from "./all-leave.service";
import {SharedService} from "../shared.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-leave',
  templateUrl: './all-leave.component.html',
  styleUrls: ['./all-leave.component.css']
})
export class AllLeaveComponent implements OnInit {
  public leaveList;
  public loading;
  public hasError;
  public pendingLeaves: any;

  employee: any;
  subscription: Subscription;

  protected showPrevButton: boolean = false;
  protected showNextButton: boolean = true;

  protected paginationIndex :number =1;


  constructor(private allLeaveService: AllLeaveService, private shared_service: SharedService, private router:Router) {
    this.subscription = this.shared_service.chosenEmployee.subscribe(it =>
      {
        this.employee = it;
      }
    );

  }

  ngOnInit(): void {
    if(this.employee.role == 'MANAGER'){
      this.getLeaveInfobyManager(this.employee.id)

    }else {
      this.getLeaveInfo();
    }

  }

  getLeaveInfo(){
    this.loading = true;
    this.allLeaveService.getLeaves(this.paginationIndex).subscribe((response) =>{
      this.leaveList=response.content;
      this.filterLeaves();

      console.log(response);
    }, error => {
      console.log(error)
    }).add(()=>{
      this.loading=false;
    });
  }

  getLeaveInfobyManager(managerId :number){
    this.loading = true;
    this.allLeaveService.getLeavesByManager(this.paginationIndex,managerId).subscribe((response) =>{
      this.leaveList=response.content;
      this.filterLeaves();

      console.log(response);
    }, error => {
      console.log(error)
    }).add(()=>{
      this.loading=false;
    });
  }

  filterLeaves(){
    this.pendingLeaves =[...this.leaveList.filter(it =>(it.status == 'PENDING'))]
  }

  approveLeaveStatus(leaveId) {
    let  leaveStatus: {status: string}
    leaveStatus = {status: "APPROVED"}
    this.allLeaveService.updateLeaveStatus(leaveStatus, leaveId).subscribe((response) => {
      console.log(response);
      alert("Leave is approved!")
      this.router.navigate(['/']);
    });
  }

  rejectLeaveStatus(leaveId) {
    let leaveStatus: {status: string}
    leaveStatus = {status: "REJECTED"}
    this.allLeaveService.updateLeaveStatus(leaveStatus, leaveId).subscribe((response) => {
      console.log(response);
      alert("Leave is rejected!")
      this.router.navigate(['/']);
    });
  }

  paginationPrevButton(){

  }

  paginationNextButton(){

  }

}
