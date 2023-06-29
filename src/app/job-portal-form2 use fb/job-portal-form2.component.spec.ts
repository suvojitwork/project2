import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPortalForm2Component } from './job-portal-form2.component';

describe('JobPortalForm2Component', () => {
  let component: JobPortalForm2Component;
  let fixture: ComponentFixture<JobPortalForm2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobPortalForm2Component]
    });
    fixture = TestBed.createComponent(JobPortalForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
