import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs/dogs.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'dogs',
    title: 'perros',
    component: DogsComponent
  }
]

@NgModule({
  declarations: [
    DogsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class AdminModule { }
