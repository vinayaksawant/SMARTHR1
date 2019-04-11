import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployerListComponent } from './employer/employer-list.component';
import { EmployerComponent } from './employer/employer.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { EmployerService } from './employer/employer.service';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployerDetailComponent } from './employer/employer-detail.component';
import { LoginComponent } from './user/login.component';
import { EmployerEditComponent } from './employer/employer-edit/employer-edit.component';
import { EmployerEditGeneralComponent } from './employer/employer-edit/employer-edit-general.component';
import { EmployerEditDemographicComponent } from './employer/employer-edit/employer-edit-demographic.component';
import { EmployeeDetailComponent } from './employee/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployerListComponent,
    //InMemoryWebApiModule.forroot(EmployerService, {delay: 1000})    ,
    EmployerComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    EmployerDetailComponent,
    LoginComponent,
    EmployerEditComponent,
    EmployerEditGeneralComponent,
    EmployerEditDemographicComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
