import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .map((params: ParamMap) => params.get('id'))
      .subscribe(id => this.id = id);
  }

}
