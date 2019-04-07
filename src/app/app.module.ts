import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployerListComponent } from './employer/employer-list.component';
import { EmployerComponent } from './employer/employer.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployerListComponent,
    EmployerComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
