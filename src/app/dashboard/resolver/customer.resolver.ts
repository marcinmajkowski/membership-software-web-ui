import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Customer } from '../../customer/customer.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class CustomerResolver implements Resolve<Customer> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer> {
    const dummyCustomer = <Customer>{
      id: route.paramMap.get('id'),
      firstName: 'Steve',
    };
    return Observable.of(dummyCustomer)
      .do(() => console.log('Resolving...'))
      .delay(500)
      .do(() => console.log('Resolved...'));
  }
}
