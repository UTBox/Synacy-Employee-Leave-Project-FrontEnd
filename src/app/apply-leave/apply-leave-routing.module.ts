import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApplyLeaveComponent} from "./apply-leave.component";

const routes: Routes = [
  {path: 'leave/apply_leave', component: ApplyLeaveComponent, title: 'Apply Leave'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyLeaveRoutingModule { }
