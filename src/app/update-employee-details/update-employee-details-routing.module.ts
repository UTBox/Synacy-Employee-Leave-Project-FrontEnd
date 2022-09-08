import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdateEmployeeDetailsComponent} from "./update-employee-details.component";

const routes: Routes = [{path:'employee/view/:employeeId', component: UpdateEmployeeDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateEmployeeDetailsRoutingModule { }
