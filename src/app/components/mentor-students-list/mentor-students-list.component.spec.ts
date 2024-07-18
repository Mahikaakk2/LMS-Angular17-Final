import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorStudentsListComponent } from './mentor-students-list.component';

describe('MentorStudentsListComponent', () => {
  let component: MentorStudentsListComponent;
  let fixture: ComponentFixture<MentorStudentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MentorStudentsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentorStudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
