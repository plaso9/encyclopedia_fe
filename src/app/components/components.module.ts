import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArgumentComponent } from './argument/argument.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
    ArgumentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    ArgumentComponent
  ]
})
export class ComponentsModule { }
