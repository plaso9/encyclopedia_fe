import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArgumentComponent } from './argument/argument.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArgumentNewComponent } from './argument-new/argument-new.component';



@NgModule({
  declarations: [
    HomeComponent,
    ArgumentComponent,
    ArgumentNewComponent
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
