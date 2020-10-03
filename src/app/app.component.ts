import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">{{pageTitle}}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav nav-pills mr-auto">
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/welcome']">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/products']">Product List</a>
          </li>
        </ul>
      </div> 
    </nav>
    <div class="container pt-2">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle = 'SAEM Products Management';
}
