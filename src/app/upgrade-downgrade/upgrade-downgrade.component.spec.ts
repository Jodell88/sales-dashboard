import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeDowngradeComponent } from './upgrade-downgrade.component';

describe('UpgradeDowngradeComponent', () => {
  let component: UpgradeDowngradeComponent;
  let fixture: ComponentFixture<UpgradeDowngradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeDowngradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeDowngradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
