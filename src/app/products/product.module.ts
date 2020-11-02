import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';

import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditGuard } from './product-edit.guard';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { 
        path: 'products/:id', 
        canActivate: [ProductDetailsGuard],
        component: ProductDetailsComponent 
      },
      {
        path: 'products/:id/edit',
        canDeactivate: [ProductEditGuard],
        component: ProductEditComponent
      }
    ]),
  ]
})
export class ProductModule { }
