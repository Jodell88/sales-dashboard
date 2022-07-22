import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperMigrationComponent } from './copper-migration.component';

describe('CopperMigrationComponent', () => {
  let component: CopperMigrationComponent;
  let fixture: ComponentFixture<CopperMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopperMigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopperMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
