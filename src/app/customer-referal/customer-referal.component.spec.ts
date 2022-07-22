import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReferalComponent } from './customer-referal.component';

describe('CustomerReferalComponent', () => {
  let component: CustomerReferalComponent;
  let fixture: ComponentFixture<CustomerReferalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReferalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReferalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
