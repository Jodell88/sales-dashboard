import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReferalComponent } from './employee-referal.component';

describe('EmployeeReferalComponent', () => {
  let component: EmployeeReferalComponent;
  let fixture: ComponentFixture<EmployeeReferalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReferalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReferalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
