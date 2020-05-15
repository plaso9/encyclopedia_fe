import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArgumentComponent } from './argument/argument.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArgumentNewComponent } from './argument-new/argument-new.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    ArgumentComponent,
    ArgumentNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    HomeComponent,
    ArgumentComponent,
    ArgumentNewComponent,
  ]
})
export class ComponentsModule { }
