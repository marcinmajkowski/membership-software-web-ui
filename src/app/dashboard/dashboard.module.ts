import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    CustomMaterialModule,
  ],
  declarations: [DashboardComponent, CustomersComponent]
})
export class DashboardModule { }
