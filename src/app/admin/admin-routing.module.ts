import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { EmployerListComponent } from './employer-list.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path:'' , children:[
    {path:'employerlist', component:EmployerListComponent}
    // {path:'benefit', component:BenefitComponent}    
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
