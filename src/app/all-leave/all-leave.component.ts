import { Component, OnInit } from '@angular/core';
import {AllLeaveService} from "./all-leave.service";

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

  constructor(private allLeaveService: AllLeaveService ) { }

  ngOnInit(): void {
    this.getLeaveInfo();
    console.log(this.leaveList);


  }

  getLeaveInfo(){
    this.loading = true;
    this.allLeaveService.getLeaves().subscribe((response) =>{
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

}
