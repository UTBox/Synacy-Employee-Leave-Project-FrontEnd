import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UpdateEmployeeDetailsRoutingModule} from './update-employee-details-routing.module';
import {UpdateEmployeeDetailsComponent} from "./update-employee-details.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UpdateEmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    UpdateEmployeeDetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UpdateEmployeeDetailsModule {
}
