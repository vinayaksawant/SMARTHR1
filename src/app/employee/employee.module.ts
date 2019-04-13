import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { DependentComponent } from './dependent/dependent.component';
import { LifeeventComponent } from './lifeevent/lifeevent.component';
import { BenefitComponent } from './benefit/benefit.component';
import { EmployeeComponent } from './employee.component';

@NgModule({
  declarations: [DependentComponent, LifeeventComponent, BenefitComponent,EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
