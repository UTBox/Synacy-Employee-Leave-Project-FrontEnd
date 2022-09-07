import {Component, OnInit} from '@angular/core';
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

  protected paginationIndex: number = 1;
  protected totalNumberOfEmployee: number;
  protected numberOfPagesToDisplay: number;

  protected showPrevButton: boolean = false;
  protected showNextButton: boolean = true;


  constructor(private allEmployeeService: AllEmployeesService) {
  }

  ngOnInit(): void {
    this.getEmployeesData();
    console.log(this.employeeList);

  }

  getEmployeesData() {
    this.loading = true;
    this.allEmployeeService.getEmployees(this.paginationIndex).subscribe((response) => {
        this.employeeList = response.content;
        this.totalNumberOfEmployee = response.totalCount;

        console.log(response);

        this.numberOfPagesToDisplay = this.allEmployeeService.calculateNumberOfPages(this.totalNumberOfEmployee);
      }, (error) => {
        console.log(error);
      }
    ).add(() => {
      this.loading = false;
    });
  }


  ngOnDestroy() {

  }

  paginationNextButton(): void {
    if (this.paginationIndex < this.numberOfPagesToDisplay) {
      this.paginationIndex++;
    }
    this.getEmployeesData()
    this.inspectPaginationForButtonAccess();
    console.log(this.paginationIndex);
  }

  paginationPrevButton(): void {
    if (this.paginationIndex > 1) {
      this.paginationIndex--;
    }
    this.getEmployeesData()
    this.inspectPaginationForButtonAccess();
    console.log(this.paginationIndex);
  }

  inspectPaginationForButtonAccess(): void {
    if (this.paginationIndex <= 1) {
      this.showPrevButton = false;
      this.showNextButton = true;
    } else if (this.paginationIndex == this.numberOfPagesToDisplay) {
      this.showPrevButton = true;
      this.showNextButton = false;
    } else {
      this.showPrevButton = true;
      this.showNextButton = true;
    }
  }

}
