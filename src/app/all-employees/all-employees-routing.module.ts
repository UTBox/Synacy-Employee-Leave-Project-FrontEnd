import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllEmployeesComponent} from "./all-employees.component";

const routes: Routes = [
  {path: "employee/view_all", component: AllEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllEmployeesRoutingModule {
}
