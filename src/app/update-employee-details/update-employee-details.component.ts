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
    this.focusedEmployeeId = Number(routeParams.get('employeeId'));
    console.log('focused number ->'+this.focusedEmployeeId);

    setTimeout(() => {
      this.filterManagerAndAdmin();
      this.getEmployeeDataById(this.focusedEmployeeId);
    }, 500)
  }

  getEmployeeDataById(employeeId: number) {
    this.loading = true;
    this.updateEmployeeService.getEmployeeDetails(employeeId).subscribe((response) => {
        this.employee = response.content;
        // console.log(response);
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
      alert("New Employee Created Successfully.");
      this.router.navigate(['/']);

    } else {
      alert('Error: Some fields have no entries. Make sure all fields have entry and try again.')
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


}
