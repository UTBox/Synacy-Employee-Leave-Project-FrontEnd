import {Component, OnInit} from '@angular/core';
import {SidebarService} from "./sidebar.service";
import {Employee} from "../classes-and-objects/employee";
import {SharedService} from "../shared.service";
import {Subscribable, Subscriber, Subscription} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public employeeList;
  public loading;
  public hasError;

  selectedEmployeeId: number = 0;

  subscription: Subscription;

  constructor(private sidebar_service: SidebarService, private shared_service: SharedService) {
  }

  ngOnInit(): void {
    this.getEmployeesData();


  }


  getEmployeesData() {
    this.loading = true;
    this.sidebar_service.getEmployees().subscribe((response) => {
        this.employeeList = response.content;
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    ).add(() => {
      this.loading = false;
    });
  }

  onEmployeeSelected() {
    console.log(this.selectedEmployeeId);
    this.setChosenEmployeeData(this.selectedEmployeeId);
  }


  setChosenEmployeeData(id: number) {
    let result: any;
    this.employeeList.filter((it) => {
      if (it.id == id) {
        result = it;
      }
    });
    this.shared_service.changeEmployee(result);

  }

}
