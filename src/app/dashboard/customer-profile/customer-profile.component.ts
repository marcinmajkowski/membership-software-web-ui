import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../customer/customer.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html'
})
export class CustomerProfileComponent implements OnInit {

  isEdit$: Observable<boolean>;

  customer$: Observable<Customer>;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.customer$ = this.route.data.map(data => data['customer']);
    this.isEdit$ = this.route.queryParamMap.map(paramMap => paramMap.has('edit'));
  }

}
