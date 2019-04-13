import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { EmployerListComponent } from './employer-list.component';
// import { AdminComponent } from './admin.component';
import { PlansetupComponent } from './plansetup/plansetup.component';

const routes: Routes = [
  { path:'' , children:[
    {path:'employerlist', component:EmployerListComponent},
    {path:'plansetup', component:PlansetupComponent}    
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
