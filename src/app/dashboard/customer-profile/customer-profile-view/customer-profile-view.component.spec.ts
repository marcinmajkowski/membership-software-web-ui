import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileViewComponent } from './customer-profile-view.component';

xdescribe('CustomerProfileViewComponent', () => {
  let component: CustomerProfileViewComponent;
  let fixture: ComponentFixture<CustomerProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProfileViewComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
