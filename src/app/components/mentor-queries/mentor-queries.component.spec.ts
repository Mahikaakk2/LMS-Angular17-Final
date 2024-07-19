import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorQueriesComponent } from './mentor-queries.component';

describe('MentorQueriesComponent', () => {
  let component: MentorQueriesComponent;
  let fixture: ComponentFixture<MentorQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MentorQueriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentorQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
