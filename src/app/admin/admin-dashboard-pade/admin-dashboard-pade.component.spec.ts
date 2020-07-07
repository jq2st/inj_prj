import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardPadeComponent } from './admin-dashboard-pade.component';

describe('AdminDashboardPadeComponent', () => {
  let component: AdminDashboardPadeComponent;
  let fixture: ComponentFixture<AdminDashboardPadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardPadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardPadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
