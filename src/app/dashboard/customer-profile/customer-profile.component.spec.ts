import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileComponent } from './customer-profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerProfileEditComponent } from './customer-profile-edit/customer-profile-edit.component';
import { CustomerProfileViewComponent } from './customer-profile-view/customer-profile-view.component';

xdescribe('CustomerProfileComponent', () => {
  let component: CustomerProfileComponent;
  let fixture: ComponentFixture<CustomerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomerProfileComponent,
        CustomerProfileEditComponent,
        CustomerProfileViewComponent,
      ],
      imports: [ RouterTestingModule.withRoutes([]) ]
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
