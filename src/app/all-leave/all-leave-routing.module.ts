import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllLeaveComponent} from "./all-leave.component";

const routes: Routes = [
  {path: 'leave/view_all', component: AllLeaveComponent, title: 'View All Leaves'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllLeaveRoutingModule {
}
