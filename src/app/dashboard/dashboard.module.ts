import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerProfileViewComponent } from './customer/customer-profile-view/customer-profile-view.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    CustomMaterialModule,
  ],
  declarations: [
    DashboardComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerProfileViewComponent,
    CustomerEditComponent
  ]
})
export class DashboardModule { }
