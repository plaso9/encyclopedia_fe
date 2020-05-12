import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
      <div class="container-fluid h-100">
        <div class="row flex-xl-nowrap h-100">
        <div class="col-md-2 col-xl-2 bd-sidebar bg-light border-right"><app-sidebar></app-sidebar></div>
        <div class="col-md-10 col-xl-10 bd-sidebar bg-light border-right"><router-outlet></router-outlet></div>
        </div>
      </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
