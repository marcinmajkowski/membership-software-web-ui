import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileComponent } from './customer-profile.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomerProfileComponent', () => {
  let component: CustomerProfileComponent;
  let fixture: ComponentFixture<CustomerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProfileComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
