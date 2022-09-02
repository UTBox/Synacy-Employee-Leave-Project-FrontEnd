import { Component, OnInit } from '@angular/core';
import {AddEmployeeService} from "../add-employee/add-employee.service";
import {AllEmployeesService} from "./all-employees.service";

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {
  public employeeList;
  public loading;
  public hasError;

  constructor(private allEmployeeService: AllEmployeesService) { }

  ngOnInit(): void {
    this.getEmployeesData();
  }
  getEmployeesData() {
    this.loading = true;
    this.allEmployeeService.getEmployees().subscribe((response) => {
        this.employeeList = response.content;

        console.log(response);
      }, (error) => {
        console.log(error);
      }
    ).add(() => {
      this.loading = false;
    });
  }
}
