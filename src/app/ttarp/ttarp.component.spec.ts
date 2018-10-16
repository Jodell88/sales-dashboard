import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtarpComponent } from './ttarp.component';

describe('TtarpComponent', () => {
  let component: TtarpComponent;
  let fixture: ComponentFixture<TtarpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtarpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
