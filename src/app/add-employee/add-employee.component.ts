import {Component, OnInit} from '@angular/core';
import {AddEmployeeService} from "./add-employee.service";


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {



  constructor(private addEmployeeService: AddEmployeeService) {
  }

  ngOnInit(): void {


  }



}
