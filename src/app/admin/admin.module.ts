import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EmployerListComponent } from './employer-list.component';
import { AdminComponent } from './admin.component';
import { PlansetupComponent } from './plansetup/plansetup.component';

@NgModule({
  declarations: [
    EmployerListComponent,
    AdminComponent,PlansetupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,    
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
