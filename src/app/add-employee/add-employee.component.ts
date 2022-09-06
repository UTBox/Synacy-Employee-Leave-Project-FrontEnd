import {Component, OnInit} from '@angular/core';
import {AddEmployeeService} from "./add-employee.service";

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public employeeFormGroup: FormGroup;

  protected role: string[] = ['MANAGER', 'EMPLOYEE'];

  public employeeList;
  public loading;
  public hasError;


  protected managerEmployees;
  protected chosenRole: string = 'EMPLOYEE';

  constructor(private addEmployeeService: AddEmployeeService, private router: Router) {
    this.employeeFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      role: new FormControl(),
      annualLeave: new FormControl(0, [Validators.min(1)]),
      managerId: new FormControl('', [Validators.required])
    });


  }

  ngOnInit(): void {
    console.log(this.chosenRole);
    this.getEmployeesData();

    setTimeout(() => {
      this.filterManagerAndAdmin();
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
    this.managerEmployees = [...this.employeeList.filter(it => (it.role == 'ADMIN' || it.role == 'MANAGER'))];
  }


  onEmployeeCreate(employeeForm: FormGroup) {
    let employee: { name: string, role: string, annualLeave: number, managerId: number };
    employee = {
      name: employeeForm.controls['name'].value,
      role: employeeForm.controls['role'].value,
      annualLeave: employeeForm.controls['annualLeave'].value,
      managerId: employeeForm.controls['managerId'].value
    };
    console.log(employee);
    this.addEmployeeService.createNewEmployee(employee);
    alert("New Employee Created Successfully.");
    this.router.navigate(['/']);
  }

  logChoice() {
    console.log(this.chosenRole);
  }


}
