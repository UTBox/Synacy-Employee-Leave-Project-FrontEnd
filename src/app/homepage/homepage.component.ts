import {Component, OnInit} from '@angular/core';
import {SidebarService} from "../sidebar/sidebar.service";
import {Subscription} from "rxjs";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  subscription: Subscription;

  id: number;
  name: string;
  role: string;
  manager: number;
  leave: number;

  constructor(private shared_service: SharedService) {
  }

  ngOnInit(): void {
    this.subscription = this.shared_service.employeeName.subscribe(name => this.name = name);

  }

}
