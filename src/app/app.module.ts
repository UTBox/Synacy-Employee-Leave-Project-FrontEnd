import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {AddEmployeeModule} from "./add-employee/add-employee.module";
import {AllEmployeesModule} from "./all-employees/all-employees.module";
import {AllLeaveRoutingModule} from "./all-leave/all-leave-routing.module";
import { HomepageComponent } from './homepage/homepage.component';
import {HomepageRoutingModule} from "./homepage/homepage-routing.module";
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import {ApplyLeaveRoutingModule} from "./apply-leave/apply-leave-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,

    // ApplyLeaveComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddEmployeeModule,
    AllEmployeesModule,
    AllLeaveRoutingModule,
    HomepageRoutingModule,
    ApplyLeaveRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
