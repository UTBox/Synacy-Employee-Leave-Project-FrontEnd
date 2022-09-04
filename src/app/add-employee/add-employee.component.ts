import {Component, OnInit} from '@angular/core';
import {AddEmployeeService} from "./add-employee.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public addEmployeeForm: FormGroup;

  protected role: string[] = ['MANAGER', 'EMPLOYEE'];

  public employeeList;
  public loading;
  public hasError;

  protected managerEmployees;

  constructor(private addEmployeeService: AddEmployeeService) {
    this.addEmployeeForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        manager: new FormControl(),
        annualLeave: new FormControl(0, [Validators.min(1)]),
        role: new FormControl()
      }
    );
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
    this.managerEmployees = [...this.employeeList.filter(it => it.role == 'MANAGER')];
  }

  protected submitAddEmployeeForm(){

  }


}
