import { Component, Input } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Customer } from '../../../customer/customer.model';

@Component({
  selector: 'app-customer-profile-edit',
  templateUrl: './customer-profile-edit.component.html',
  styleUrls: ['./customer-profile-edit.component.scss']
})
export class CustomerProfileEditComponent {

  @Input() customer: Customer;

}
