import { Component, Input } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Customer } from '../../../customer/customer.model';

@Component({
  selector: 'app-customer-profile-view',
  templateUrl: './customer-profile-view.component.html',
  styleUrls: ['./customer-profile-view.component.scss']
})
export class CustomerProfileViewComponent {

  @Input() customer: Customer;

}
