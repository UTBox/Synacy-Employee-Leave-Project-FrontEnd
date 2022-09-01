import { Component, OnInit } from '@angular/core';
import {SidebarService} from "./sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private sidebar_service: SidebarService) { }

  ngOnInit(): void {
    this.sidebar_service.addPredefinedEmployees();
    this.sidebar_service.employee.forEach(it => console.log(it));


  }

}
