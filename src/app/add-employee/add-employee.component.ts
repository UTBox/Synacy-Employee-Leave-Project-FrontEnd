import {Component, OnInit} from '@angular/core';
import {AddEmployeeService} from "./add-employee.service";


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

  // protected managerEmployees: [{id: number, name:string, role: string, manager:any, leaveBalance: number, annualLeave: number}];
  protected managerEmployees;

  constructor(private addEmployeeService: AddEmployeeService) {
  }

  ngOnInit(): void {
    this.getEmployeesData();
    // console.log(this.employeeList);
    setTimeout(() => {
      this.filterManager();
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

  filterManager() {
    this, this.managerEmployees = [...this.employeeList.filter(it => it.role == 'MANAGER')];
  }


}
