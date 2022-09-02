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
  employee: any;
  subscription: Subscription;


  constructor(private shared_service: SharedService) {
    this.subscription = this.shared_service.chosenEmployee
      .subscribe(it => {
        this.employee = it
      });
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
