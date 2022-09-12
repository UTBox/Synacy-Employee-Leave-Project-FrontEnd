import {Component, OnInit} from '@angular/core';
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

  protected paginationIndex: number = 1;
  protected numberOfPagesToDisplay: number;


  constructor(private allLeaveService: AllLeaveService, private shared_service: SharedService, private router: Router) {
    this.subscription = this.shared_service.chosenEmployee.subscribe(it => {
        this.employee = it;

      }
    );

  }

  ngOnInit(): void {
    this.fetchDataAccordingToRole();

  }

  fetchDataAccordingToRole() {
    if (this.employee.role == 'MANAGER') {
      this.getLeaveInfobyManager(this.employee.id)

    } else {
      this.getLeaveInfo();
    }
  }

  getLeaveInfo() {
    this.loading = true;
    this.allLeaveService.getLeaves(this.paginationIndex).subscribe((response) => {
      this.leaveList = response.content;

      this.pendingLeaves = response.content.filter(it => (it.status == 'PENDING'));
      this.numberOfPagesToDisplay = response.totalCount;
      console.log(response);

      this.showNextButton = this.numberOfPagesToDisplay <= 1 ? false : true;
      this.inspectPaginationForButtonAccess();
    }, error => {
      console.log(error)
    }).add(() => {
      this.loading = false;
    });
  }

  getLeaveInfobyManager(managerId: number) {
    this.loading = true;
    this.allLeaveService.getLeavesByManager(this.paginationIndex, managerId).subscribe((res) => {
      this.leaveList = res.content;

      this.pendingLeaves = res.content.filter(it => (it.status == 'PENDING'));
      this.numberOfPagesToDisplay=res.totalCount;
      console.log(res);

      this.showNextButton = this.numberOfPagesToDisplay <= 1 ? false : true;
      this.inspectPaginationForButtonAccess();
    }, error => {
      console.log(error)
    }).add(() => {
      this.loading = false;
    });
  }


  approveLeaveStatus(leaveId) {
    let leaveStatus: { status: string }
    leaveStatus = {status: "APPROVED"}
    this.allLeaveService.updateLeaveStatus(leaveStatus, leaveId).subscribe((response) => {
      console.log(response);
      alert("Leave is approved!")
      this.router.navigate(['/']);
    });
  }

  rejectLeaveStatus(leaveId) {
    let leaveStatus: { status: string }
    leaveStatus = {status: "REJECTED"}
    this.allLeaveService.updateLeaveStatus(leaveStatus, leaveId).subscribe((response) => {
      console.log(response);
      alert("Leave is rejected!")
      this.router.navigate(['/']);
    });
  }

  paginationNextButton(): void {
    if (this.paginationIndex < this.numberOfPagesToDisplay) {
      this.paginationIndex++;
    }
    this.fetchDataAccordingToRole();
    console.log(this.paginationIndex);
  }

  paginationPrevButton(): void {
    if (this.paginationIndex > 1) {
      this.paginationIndex--;
    }
    this.fetchDataAccordingToRole();
    console.log(this.paginationIndex);
  }

  private inspectPaginationForButtonAccess(): void {
    if (this.numberOfPagesToDisplay == 1) {
      this.showPrevButton = false;
      this.showNextButton = false;
    } else if (this.paginationIndex <= 1 && this.numberOfPagesToDisplay > 1) {
      this.showPrevButton = false;
      this.showNextButton = true;
    } else if (this.paginationIndex <= this.numberOfPagesToDisplay && this.numberOfPagesToDisplay > 1) {
      this.showPrevButton = true;
      this.showNextButton = false;

    } else {
      this.showPrevButton = true;
      this.showNextButton = true;
    }
  }

}
