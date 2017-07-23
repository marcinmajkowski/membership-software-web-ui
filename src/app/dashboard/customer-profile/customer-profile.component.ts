import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  customer: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('on init called');
    this.route.paramMap
      .map((params: ParamMap) => ({
        id: params.get('id'),
        name: 'John'
      }))
      .do(console.log)
      .subscribe(customer => this.customer = customer);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
