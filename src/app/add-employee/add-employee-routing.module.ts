import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEmployeeComponent} from "./add-employee.component";

const routes: Routes = [
  {path: 'employee/add', component: AddEmployeeComponent, title: 'Add New Employee'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEmployeeRoutingModule { }
