import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login.component';

const routes: Routes = [
  {path:'welcome', component: WelcomeComponent, canActivate:[ AuthGuard ]},
  {path:'login', component: LoginComponent},  
  {path: '', redirectTo: 'welcome' , pathMatch:'full' } ,
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
