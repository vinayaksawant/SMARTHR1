import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'welcome', component: WelcomeComponent, canActivate:[ AuthGuard ]},
  {path:'login', component: LoginComponent},  
  {path:'employer', component: AdminComponent},    
  {path: '', redirectTo: 'welcome' , pathMatch:'full' } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
