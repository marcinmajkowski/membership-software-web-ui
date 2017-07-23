import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerProfileViewComponent } from './customer/customer-profile-view/customer-profile-view.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';

const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'customers', component: CustomersComponent },
      {
        path: 'customers/:id',
        component: CustomerComponent,
        children: [
          { path: '', component: CustomerProfileViewComponent },
          { path: 'edit', component: CustomerEditComponent },
        ]
      },
      { path: '', redirectTo: 'customers', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
