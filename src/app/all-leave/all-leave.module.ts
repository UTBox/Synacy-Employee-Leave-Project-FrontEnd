import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllLeaveRoutingModule } from './all-leave-routing.module';
import {AllLeaveComponent} from "./all-leave.component";


@NgModule({
  declarations: [
    AllLeaveComponent
  ],
  imports: [
    CommonModule,
    AllLeaveRoutingModule
  ]
})
export class AllLeaveModule { }
