import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AllEmployeesRoutingModule} from './all-employees-routing.module';
import {AllEmployeesComponent} from "./all-employees.component";


@NgModule({
  declarations: [
    AllEmployeesComponent
  ],
  imports: [
    CommonModule,
    AllEmployeesRoutingModule
  ]
})
export class AllEmployeesModule {
}
