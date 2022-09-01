import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyLeaveRoutingModule } from './apply-leave-routing.module';
import {ApplyLeaveComponent} from "./apply-leave.component";


@NgModule({
  declarations: [
    ApplyLeaveComponent
  ],
  imports: [
    CommonModule,
    ApplyLeaveRoutingModule
  ]
})
export class ApplyLeaveModule { }
