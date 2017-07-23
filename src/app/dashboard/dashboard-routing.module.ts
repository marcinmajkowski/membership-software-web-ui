import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerProfileViewComponent } from './customer-profile/customer-profile-view/customer-profile-view.component';
import { CustomerProfileEditComponent } from './customer-profile/customer-profile-edit/customer-profile-edit.component';

const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'customers', component: CustomersComponent },
      {
        path: 'customers/:id',
        component: CustomerProfileComponent,
        children: [
          { path: '', component: CustomerProfileViewComponent },
          { path: 'edit', component: CustomerProfileEditComponent },
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
