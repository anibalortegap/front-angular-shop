import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {TaskHomeComponent} from './task-home/task-home.component'

const routes: Routes =[
    { path:"", redirectTo:"/taskHomeComponent", pathMatch:"full" },
    { path:"taskHomeComponent", component:TaskHomeComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:[ RouterModule ]
  
})
export class AppRoutingModule { }
