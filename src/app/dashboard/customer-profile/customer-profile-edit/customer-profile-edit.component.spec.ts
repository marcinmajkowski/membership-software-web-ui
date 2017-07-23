import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileEditComponent } from './customer-profile-edit.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomerProfileEditComponent', () => {
  let component: CustomerProfileEditComponent;
  let fixture: ComponentFixture<CustomerProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProfileEditComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // FIXME this does not work due to route.parent
  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
