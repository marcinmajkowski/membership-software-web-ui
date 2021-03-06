import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileEditComponent } from './customer-profile-edit.component';

xdescribe('CustomerProfileEditComponent', () => {
  let component: CustomerProfileEditComponent;
  let fixture: ComponentFixture<CustomerProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProfileEditComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
