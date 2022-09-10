import {Component, OnInit} from '@angular/core';
import {AddEmployeeService} from "../add-employee/add-employee.service";
import {AllEmployeesService} from "./all-employees.service";
import {Router, RouterLink} from "@angular/router";

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


  constructor(private allEmployeeService: AllEmployeesService, private router: Router) {
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

        this.showNextButton = this.numberOfPagesToDisplay <= 1 ? false : true;

        this.inspectPaginationForButtonAccess();
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
    console.log(this.paginationIndex);
  }

  paginationPrevButton(): void {
    if (this.paginationIndex > 1) {
      this.paginationIndex--;
    }
    this.getEmployeesData()
    console.log(this.paginationIndex);
  }

  private inspectPaginationForButtonAccess(): void {
    // if (this.paginationIndex <= 1) {
    //   this.showPrevButton = false;
    //   this.showNextButton = true;
    // } else if (this.paginationIndex == this.numberOfPagesToDisplay) {
    //   this.showPrevButton = true;
    //   this.showNextButton = false;
    // } else {
    //   this.showPrevButton = true;
    //   this.showNextButton = true;
    // }
    if (this.numberOfPagesToDisplay == 1) {
      this.showPrevButton = false;
      this.showNextButton = false;
    } else if (this.paginationIndex <= 1 && this.numberOfPagesToDisplay > 1) {
      this.showPrevButton = false;
      this.showNextButton = true;
    } else if (this.paginationIndex <= this.numberOfPagesToDisplay && this.numberOfPagesToDisplay > 1) {
      this.showPrevButton = true;
      this.showNextButton = false;

    } else {
      this.showPrevButton = true;
      this.showNextButton = true;
    }
  }


}
