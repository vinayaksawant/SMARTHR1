import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EmployerListComponent } from './employer-list.component';
import { AdminComponent } from './admin.component';
import { BenefitComponent } from './benefit.component';


@NgModule({
  declarations: [
    EmployerListComponent,
    AdminComponent,
    BenefitComponent
  ],
  imports: [
    CommonModule,
    FormsModule,    
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
