import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageRoutingModule } from './homepage-routing.module';
import {HomepageComponent} from "./homepage.component";


@NgModule({
  declarations: [
    // HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    BrowserModule
  ]
})
export class HomepageModule { }
