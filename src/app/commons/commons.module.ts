import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArgumentService } from './argument/argument.service';
import { ConstantsService } from './constants/constants.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ArgumentService,
    ConstantsService,
  ],
})
export class CommonsModule { }
