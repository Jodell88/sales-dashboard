import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortForwardingComponent } from './port-forwarding.component';

describe('PortForwardingComponent', () => {
  let component: PortForwardingComponent;
  let fixture: ComponentFixture<PortForwardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortForwardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortForwardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
