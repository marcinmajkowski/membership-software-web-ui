import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerResolver } from './resolver/customer.resolver';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'customers', component: CustomersComponent },
      {
        path: 'customers/:id',
        component: CustomerProfileComponent,
        resolve: {
          customer: CustomerResolver,
        }
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
  ],
  providers: [
    CustomerResolver
  ]
})
export class DashboardRoutingModule { }
