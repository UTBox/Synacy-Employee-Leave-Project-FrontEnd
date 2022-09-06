import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddEmployeeRoutingModule} from './add-employee-routing.module';
import {AddEmployeeComponent} from "./add-employee.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AddEmployeeComponent
  ],
  imports: [
    AddEmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ]
})
export class AddEmployeeModule {
}
