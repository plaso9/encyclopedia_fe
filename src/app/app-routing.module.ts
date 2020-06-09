import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ArgumentComponent } from './components/argument/argument.component';
import { ArgumentNewComponent } from './components/argument-new/argument-new.component';
import { ArgumentListComponent } from './components/argument-list/argument-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'argument/:id', component: ArgumentComponent },
  { path: 'argument-new', component: ArgumentNewComponent },
  { path: 'argument/:id/update', component: ArgumentNewComponent },
  { path: 'arguments', component: ArgumentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
