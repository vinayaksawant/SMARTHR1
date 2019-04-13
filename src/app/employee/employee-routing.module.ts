import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { BenefitComponent } from './benefit/benefit.component';
import { LifeeventComponent } from './lifeevent/lifeevent.component';
import { DependentComponent } from './dependent/dependent.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
    { path:'' , children:[
      {path:'employee', component:EmployeeComponent},
      {path:'employeedetail', component:EmployeeDetailsComponent},      
      {path:'benefit', component:BenefitComponent},    
      {path:'lifeevent', component:LifeeventComponent},
      {path:'dependent', component:DependentComponent},            
    ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
