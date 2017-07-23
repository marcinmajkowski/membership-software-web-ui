import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Customer } from '../../../customer/customer.model';

@Component({
  selector: 'app-customer-profile-edit',
  templateUrl: './customer-profile-edit.component.html',
  styleUrls: ['./customer-profile-edit.component.scss']
})
export class CustomerProfileEditComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  customer: Customer;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.customer = this.route.snapshot.data['customer'];
    this.subscription = this.route.parent.data
      .map((data: Data) => data['customer'])
      .subscribe((customer: Customer) => this.customer = customer);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
