import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSigninComponent } from './google-signin/google-signin.component';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { SecurityRoutingModule } from './security-routing.module'; // Importar módulo de rutas

@NgModule({
  declarations: [
    GoogleSigninComponent
  ],
  imports: [
    CommonModule,
    GoogleSigninButtonModule,
    SecurityRoutingModule // Aquí importas el módulo de rutas
  ]
})
export class SecurityModule { }
