import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer.model';

import 'rxjs/add/operator/publishLast';

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
    return Observable.of(JSON.parse(JSON.stringify(SAMPLE_CUSTOMERS)));
  }

  findById$(id: string): Observable<Customer> {
    return Observable.of(JSON.parse(JSON.stringify(SAMPLE_CUSTOMERS.find(customer => customer.id === id))));
  }

  update$(oldCustomer: Customer, newCustomer: Customer): Observable<Customer> {
    const index = SAMPLE_CUSTOMERS.findIndex(customer => customer.id === oldCustomer.id);
    return Observable.of(<Customer>{
      id: oldCustomer.id,
      ...JSON.parse(JSON.stringify(newCustomer))
    })
      .do(customer => SAMPLE_CUSTOMERS[index] = customer)
      .do(() => console.log('updated!'))
      .publishLast()
      .refCount();
  }
}
