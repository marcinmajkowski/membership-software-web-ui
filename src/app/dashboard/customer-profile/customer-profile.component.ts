import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { Customer } from '../../customer/customer.model';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html'
})
export class CustomerProfileComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  isEdit = false;

  customer: Customer;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.customer = this.route.snapshot.data['customer'];
    this.subscriptions.push(this.route.data
      .subscribe((data: Data) => this.customer = data['customer']));
    this.subscriptions.push(this.route.queryParamMap
      .subscribe((paramMap: ParamMap) => this.isEdit = paramMap.has('edit')));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
