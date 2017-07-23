import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer/customer.service';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../customer/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers$: Observable<Customer[]>;

  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit() {
    this.customers$ = this.customerService.findAll$();
  }

}
