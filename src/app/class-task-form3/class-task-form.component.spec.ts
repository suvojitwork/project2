import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTaskFormComponent } from './class-task-form.component';

describe('ClassTaskFormComponent', () => {
  let component: ClassTaskFormComponent;
  let fixture: ComponentFixture<ClassTaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassTaskFormComponent]
    });
    fixture = TestBed.createComponent(ClassTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
