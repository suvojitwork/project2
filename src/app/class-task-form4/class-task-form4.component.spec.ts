import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTaskForm4Component } from './class-task-form4.component';

describe('ClassTaskForm4Component', () => {
  let component: ClassTaskForm4Component;
  let fixture: ComponentFixture<ClassTaskForm4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassTaskForm4Component]
    });
    fixture = TestBed.createComponent(ClassTaskForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
