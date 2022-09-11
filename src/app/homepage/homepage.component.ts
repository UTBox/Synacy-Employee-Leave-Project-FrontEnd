import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {SharedService} from "../shared.service";
import {HomepageService} from "./homepage.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  employee: any;
  subscription: Subscription;

  getEmployeeRole: string;
  getManagerName: string;

  public employeeDetailsObj: any;
  public loading;
  public hasError;

  showManagerText: boolean = false;
  showRemainingLeave: boolean = false;


  constructor(private shared_service: SharedService, private homepage_service: HomepageService) {
    this.subscription = this.shared_service.chosenEmployee.subscribe(it => {
      this.employee = it;

      console.log(this.employee);

      this.getEmployeeRole = this.employee.role;
      this.getManagerName = (this.employee.manager != null) ? this.employee.manager.name : '';


      this.showRemainingLeave = (this.employee.role == 'ADMIN') ? false : true;
      this.showManagerText = (this.employee.role == 'ADMIN') ? false : true;

      if (this.employee.id != 0) {
        setTimeout(() => {
            this.fetchEmployeeDataById(it.id);
          }, 100);

      }
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  fetchEmployeeDataById(id: number) {
    this.loading = true;
    this.homepage_service.getEmployeeDetails(id).subscribe((response) => {
      this.employeeDetailsObj = response.leaveBalance;
    }, error => {
      console.log(error)
    }).add(() => {
      this.loading = false;
    });

  }
}
