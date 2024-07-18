import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesbymentorComponent } from './coursesbymentor.component';

describe('CoursesbymentorComponent', () => {
  let component: CoursesbymentorComponent;
  let fixture: ComponentFixture<CoursesbymentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesbymentorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesbymentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
