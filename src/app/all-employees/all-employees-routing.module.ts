import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllEmployeesComponent} from "./all-employees.component";

const routes: Routes = [
  {path: 'employee/view', component: AllEmployeesComponent,title: 'View All Employee'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllEmployeesRoutingModule {
}
