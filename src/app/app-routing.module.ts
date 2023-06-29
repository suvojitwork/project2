import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobPortalComponent } from './job-portal use fc/job-portal.component';
import { JobPortalForm2Component } from './job-portal-form2 use fb/job-portal-form2.component';
import { ClassTaskFormComponent } from './class-task-form3/class-task-form.component';
import { ClassTaskForm4Component } from './class-task-form4/class-task-form4.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  {path:'form', component: JobPortalComponent },

  {path:'secondform', component: JobPortalForm2Component },

  {path:'classwork', component: ClassTaskFormComponent },

  {path:'classwork2', component: ClassTaskForm4Component },

  {path:'registration', component: RegistrationComponent },
  
  {path:'login', component: LoginComponent },

  {path:'profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
