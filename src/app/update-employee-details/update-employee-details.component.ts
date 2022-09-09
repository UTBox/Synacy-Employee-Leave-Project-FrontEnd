import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UpdateEmployeeDetailsService} from "./update-employee-details.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employee-details',
  templateUrl: './update-employee-details.component.html',
  styleUrls: ['./update-employee-details.component.css']
})
export class UpdateEmployeeDetailsComponent implements OnInit {

  public employeeList
  protected managerEmployees;
  protected chosenRole: string = 'EMPLOYEE';
  protected showInputManagerField = true
  protected managerNamePlaceholder: string;

  protected role: string[] = ['MANAGER', 'EMPLOYEE', 'ADMIN'];

  public employee;
  public loading;
  public hasError;

  protected focusedEmployeeId: number;


  updateEmployeeForm: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private updateEmployeeService: UpdateEmployeeDetailsService) {
    this.updateEmployeeForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      role: new FormControl(null),
      managerId: new FormControl(null, [Validators.required])
    });

  }

  ngOnInit(): void {
    this.getEmployeesData();
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const employeeIdFromRoute = Number(routeParams.get('employeeId'));
    this.focusedEmployeeId = employeeIdFromRoute;

    setTimeout(() => {
      this.filterManagerAndAdmin();
      this.getEmployeeDataById(employeeIdFromRoute);

    }, 500)

    setTimeout(() => {
      this.managerNamePlaceholder = this.employee.manager;

    }, 1000)
  }

  getEmployeeDataById(employeeId: number) {
    this.loading = true;
    this.updateEmployeeService.getEmployeeDetails(employeeId).subscribe((response) => {
        this.employee = response;
        this.setFormFields(this.employee);
        console.log(this.employee);
      }, (error) => {
        console.log(error);
      }
    ).add(() => {
      this.loading = false;
    });
  }

  getEmployeesData() {
    this.loading = true;
    this.updateEmployeeService.getEmployees().subscribe((response) => {
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


  onEmployeeUpdate(employeeForm: FormGroup) {
    let employee: { id: number, name: string, role: string, managerId: number };

    if (this.updateEmployeeService.checkValuesIfValid(employeeForm)) {
      employee = this.populateFields(employeeForm);

      console.log(employee);
      this.updateEmployeeService.saveEmployeeDetails(employee);
      alert("Employee Updated Successfully.");
      this.router.navigate(['/employee/view']);

    } else {
      alert('Error: Make sure you have re-entered all the input fields.')
    }
  }

  private

  populateFields(employeeForm: FormGroup): any {
    let employeeObject: { id: number, name: string, role: string, managerId: number };
    if (employeeForm.controls['role'].value == 'ADMIN') {
      employeeObject = {
        id: this.focusedEmployeeId,
        name: employeeForm.controls['name'].value,
        role: employeeForm.controls['role'].value,
        managerId: 1,
      };
      return employeeObject;
    } else {
      employeeObject = {
        id: this.focusedEmployeeId,
        name: employeeForm.controls['name'].value,
        role: employeeForm.controls['role'].value,
        managerId: employeeForm.controls['managerId'].value,
      };
      return employeeObject;
    }
  }

  showRemainingInputFieldsIfNotAdmin() {
    console.log(this.chosenRole);
    if (this.chosenRole == 'ADMIN') {
      this.showInputManagerField = false;
    } else {
      this.showInputManagerField = true;
    }
  }

  protected setFormFields(employee: { id: number, name: string, role: string, manager: string,managerId: number, annualLeave: number, leaveBalance: number }): void {
    this.updateEmployeeForm.controls['name'].setValue(employee.name);
    this.updateEmployeeForm.controls['role'].setValue(employee.role);
    this.updateEmployeeForm.controls['managerId'].setValue(employee.managerId);
    this.managerNamePlaceholder = employee.manager;
  }


}
