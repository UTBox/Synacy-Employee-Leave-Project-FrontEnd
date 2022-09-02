import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  employee: any;
  subscription: Subscription;

  getEmployeeRole: string;

  showManagerText: boolean;
  showRemainingLeave: boolean;


  constructor(private shared_service: SharedService) {
    this.subscription = this.shared_service.chosenEmployee
      .subscribe(it => {
        this.employee = it
        this.getEmployeeRole = this.employee.role;

        if (this.employee.role == 'EMPLOYEE') {
          this.showManagerText = true;
          this.showRemainingLeave = true;
        } else if (this.employee.role == 'MANAGER') {
          this.showManagerText = false;
          this.showRemainingLeave = true;
        }else{
          this.showManagerText = false;
          this.showRemainingLeave = false;
        }
        console.log(this.getEmployeeRole);
      });



  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
