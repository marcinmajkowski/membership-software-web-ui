import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileViewComponent } from './customer-profile-view.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomerProfileViewComponent', () => {
  let component: CustomerProfileViewComponent;
  let fixture: ComponentFixture<CustomerProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProfileViewComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
