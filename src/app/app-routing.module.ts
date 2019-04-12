import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login.component';
import { EmployerComponent } from './admin/employer.component';
// import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'welcome', component: WelcomeComponent, canActivate:[ AuthGuard ]},
  {path:'login', component: LoginComponent},  
  {path:'employer', component: EmployerComponent},    
  // {path:'employee', component: EmployeeComponent},      
  {path: '', redirectTo: 'welcome' , pathMatch:'full' } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
