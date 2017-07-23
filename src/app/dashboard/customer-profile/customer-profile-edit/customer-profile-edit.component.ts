import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Customer } from '../../../customer/customer.model';

@Component({
  selector: 'app-customer-profile-edit',
  templateUrl: './customer-profile-edit.component.html',
  styleUrls: ['./customer-profile-edit.component.scss']
})
export class CustomerProfileEditComponent implements OnInit {

  customerForm: FormGroup;

  @Input() customer: Customer;

  @Output() customerUpdated = new EventEmitter<{current: Customer, updated: Customer}>();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      firstName: [this.customer.firstName, Validators.required],
    });
  }

  onSubmit() {
    this.customerUpdated.emit({
      current: this.customer,
      updated: this.customerForm.value
    });
    return false;
  }
}
