import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Customer } from '../../customer/customer.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import { CustomerService } from '../../customer/customer.service';

@Injectable()
export class CustomerResolver implements Resolve<Customer> {

  constructor(
    private customerService: CustomerService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer> {
    return this.customerService.findById$(route.paramMap.get('id'));
  }
}
