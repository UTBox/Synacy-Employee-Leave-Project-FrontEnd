import {Component, OnInit} from '@angular/core';
import {AddEmployeeService} from "./add-employee.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  protected role: string[] = ['MANAGER', 'EMPLOYEE'];

  public employeeList;
  public loading;
  public hasError;


  protected managerEmployees;
  protected adminEmployees;
  protected chosenRole: string = 'EMPLOYEE';

  constructor(private addEmployeeService: AddEmployeeService) {


  }

  ngOnInit(): void {
    console.log(this.chosenRole);
    this.getEmployeesData();
    // console.log(this.employeeList);
    setTimeout(() => {
      this.filterManagerAndAdmin();
      console.log(this.adminEmployees);
      console.log(this.managerEmployees);
    }, 500)


  }

  getEmployeesData() {
    this.loading = true;
    this.addEmployeeService.getEmployees().subscribe((response) => {
        this.employeeList = response.content;
      }, (error) => {
        console.log(error);
      }
    ).add(() => {
      this.loading = false;
    });
  }

  filterManagerAndAdmin() {
    this.managerEmployees = [...this.employeeList.filter(it => it.role == 'MANAGER')];
    this.adminEmployees = [...this.employeeList.filter(it => it.role == 'ADMIN')];


  }

  onEmployeeCreate(employee: { name: string, role: string, annualLeave: number,  managerId: number }) {
    console.log(employee);
    this.addEmployeeService.createNewEmployee(employee);
  }

  logChoice(){
    console.log(this.chosenRole);
  }



}
