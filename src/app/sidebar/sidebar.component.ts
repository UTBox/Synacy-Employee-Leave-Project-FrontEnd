import {Component, OnInit} from '@angular/core';
import {SidebarService} from "./sidebar.service";
import {Employee} from "../classes-and-objects/employee";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // public employeeData: Employee;

  public employeeList;
  public loading;
  public hasError;

  selectedEmployeeId: number = 1;


  constructor(private sidebar_service: SidebarService) {
  }

  ngOnInit(): void {
    //< --- these code implementation is just created for mocking interaction in the front end.
    // this.sidebar_service.addPredefinedEmployees();
    // this.sidebar_service.employee.forEach(it => console.log(it));
    // < --- >
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
    this.employeeList.forEach(function (value) {
      if (value.id == id) {
        console.log(value);
        this.sidebar_service.employeeId = value.id;
        this.sidebar_service.employeeName = value.name;
        this.sidebar_service.employeeManager = value.manager;
        this.sidebar_service.employeeRole = value.role;
        this.sidebar_service.employeeLeave = value.leave_balance;

      }
    })
  }

}
