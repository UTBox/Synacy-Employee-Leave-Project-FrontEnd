import {Component, OnInit} from '@angular/core';
import {AddEmployeeService} from "./add-employee.service";

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SharedService} from "../shared.service";


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public employeeFormGroup: FormGroup;

  protected role: string[] = ['MANAGER', 'EMPLOYEE', 'ADMIN'];

  public employeeList;
  public loading;
  public hasError;


  protected managerEmployees;
  protected chosenRole: string = 'EMPLOYEE';

  protected showInputManagerField = true;

  constructor(private addEmployeeService: AddEmployeeService, private router: Router) {
    this.employeeFormGroup = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      role: new FormControl(null),
      annualLeave: new FormControl(null, [Validators.min(1)]),
      managerId: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    console.log(this.chosenRole);
    this.getEmployeesData();

    setTimeout(() => {
      this.filterManagerAndAdmin();
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
    this.managerEmployees = [...this.employeeList.filter(it => (it.role == 'ADMIN' || it.role == 'MANAGER'))];
  }


  onEmployeeCreate(employeeForm: FormGroup) {
    let employee: { name: string, role: string, annualLeave: number, managerId: number };

    if (this.addEmployeeService.valuesAreValid(employeeForm)) {
      employee = this.populateFields(employeeForm);

      console.log(employee);
      this.addEmployeeService.createNewEmployee(employee);
      alert("New Employee Created Successfully.");
      this.router.navigate(['/']);

    } else {
      alert('Error: Some fields have no entries. Make sure all fields have entry and try again.')
    }


  }

  private populateFields(employeeForm: FormGroup): any {
    let employee: { name: string, role: string, annualLeave: number, managerId: number };
    if (employeeForm.controls['role'].value == 'ADMIN') {
      employee = {
        name: employeeForm.controls['name'].value,
        role: employeeForm.controls['role'].value,
        annualLeave: 0,
        managerId: 1
      };
      return employee;
    } else {
      employee = {
        name: employeeForm.controls['name'].value,
        role: employeeForm.controls['role'].value,
        annualLeave: employeeForm.controls['annualLeave'].value,
        managerId: employeeForm.controls['managerId'].value
      };
      return employee;
    }
  }

  protected showRemainingInputFieldsIfNotAdmin() {
    console.log(this.chosenRole);
    if (this.chosenRole == 'ADMIN') {
      this.showInputManagerField = false;
    } else {
      this.showInputManagerField = true;
    }
  }


}
