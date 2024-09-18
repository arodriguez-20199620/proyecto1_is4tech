import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleSigninComponent } from './google-signin/google-signin.component';

const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: GoogleSigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
