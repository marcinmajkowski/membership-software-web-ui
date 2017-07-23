import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../customer/customer.model';
import { Observable } from 'rxjs/Observable';
import { CustomerService } from '../../customer/customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html'
})
export class CustomerProfileComponent implements OnInit {

  isEdit$: Observable<boolean>;

  customer$: Observable<Customer>;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.customer$ = this.route.data.map(data => data['customer']);
    this.isEdit$ = this.route.queryParamMap.map(paramMap => paramMap.has('edit'));
  }

  onCustomerUpdated(customerUpdateData: { current: Customer, updated: Customer }) {
    this.customer$ = this.customerService.update$(customerUpdateData.current, customerUpdateData.updated);
    this.customer$.subscribe(() => this.router.navigate(['./'], { relativeTo: this.route }));
  }
}
