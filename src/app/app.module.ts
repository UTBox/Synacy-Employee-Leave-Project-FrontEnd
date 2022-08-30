import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {AddEmployeeModule} from "./add-employee/add-employee.module";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    // AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddEmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
