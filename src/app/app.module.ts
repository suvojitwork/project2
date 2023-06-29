import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { JobPortalComponent } from './job-portal use fc/job-portal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobPortalForm2Component } from './job-portal-form2 use fb/job-portal-form2.component';
import { ClassTaskFormComponent } from './class-task-form3/class-task-form.component';
import { ClassTaskForm4Component } from './class-task-form4/class-task-form4.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    JobPortalComponent,
    JobPortalForm2Component,
    ClassTaskFormComponent,
    ClassTaskForm4Component,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
