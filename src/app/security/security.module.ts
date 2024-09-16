import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { GoogleSigninComponent } from './google-signin/google-signin.component';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: GoogleSigninComponent
  }
]
@NgModule({
  declarations: [
    GoogleSigninComponent
  ],
  imports: [
    CommonModule,
    GoogleSigninButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SecurityModule { }
