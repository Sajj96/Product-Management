import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'signup', component: CustomersComponent }
    ]),
    SharedModule,
    ReactiveFormsModule     
  ]
})
export class CustomersModule { }
