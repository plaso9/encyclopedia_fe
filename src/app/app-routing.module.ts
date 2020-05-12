import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ArgumentComponent } from './components/argument/argument.component';
import { ArgumentNewComponent } from './components/argument-new/argument-new.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'argument', component: ArgumentComponent },
  { path: 'argument-new', component: ArgumentNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
