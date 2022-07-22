import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesmartComponent } from './pricesmart.component';

describe('PricesmartComponent', () => {
  let component: PricesmartComponent;
  let fixture: ComponentFixture<PricesmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricesmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
