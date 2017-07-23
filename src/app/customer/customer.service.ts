import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer.model';

const SAMPLE_CUSTOMERS: Customer[] = [{
  id: '0',
  firstName: 'Marcin'
}, {
  id: '1',
  firstName: 'Sylwia'
}];

@Injectable()
export class CustomerService {

  constructor() {
  }

  findAll$(): Observable<Customer[]> {
    return Observable.of(SAMPLE_CUSTOMERS);
  }

  findById$(id: string): Observable<Customer> {
    return Observable.of(SAMPLE_CUSTOMERS.find(customer => customer.id === id));
  }
}
