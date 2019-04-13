import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EmployerListComponent } from './employer-list.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    EmployerListComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,    
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
