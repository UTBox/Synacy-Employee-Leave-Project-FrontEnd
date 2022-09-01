import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {AddEmployeeModule} from "./add-employee/add-employee.module";
import {AllEmployeesModule} from "./all-employees/all-employees.module";
import {AllLeaveRoutingModule} from "./all-leave/all-leave-routing.module";
import {HomepageRoutingModule} from "./homepage/homepage-routing.module";
import {ApplyLeaveRoutingModule} from "./apply-leave/apply-leave-routing.module";
import {MyLeaveRoutingModule} from "./my-leave/my-leave-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AddEmployeeModule,
    AllEmployeesModule,
    AllLeaveRoutingModule,
    HomepageRoutingModule,
    ApplyLeaveRoutingModule,
    MyLeaveRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
