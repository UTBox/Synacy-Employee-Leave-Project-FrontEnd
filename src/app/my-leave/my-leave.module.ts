import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLeaveRoutingModule } from './my-leave-routing.module';
import {MyLeaveComponent} from "./my-leave.component";


@NgModule({
  declarations: [
    MyLeaveComponent
  ],
  imports: [
    CommonModule,
    MyLeaveRoutingModule
  ]
})
export class MyLeaveModule { }
