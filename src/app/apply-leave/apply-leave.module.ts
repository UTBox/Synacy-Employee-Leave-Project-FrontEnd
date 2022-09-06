import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ApplyLeaveRoutingModule} from './apply-leave-routing.module';
import {ApplyLeaveComponent} from "./apply-leave.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ApplyLeaveComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ApplyLeaveRoutingModule,
  ]
})
export class ApplyLeaveModule {
}
