// src/app/components/course/addcourse.component.ts
import { Component } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {

  msg = '';
  course: Course;

  constructor(private courseService: CourseService, private router: Router) {
    this.course = {
      courseId: 0,
      courseTitle: '',
      courseDescription: '',
      courseDuration: '',
      courseResource: '',
      courseCategory: '',
      approved: false,
      createdBy: 0
    };
  }

  ngOnInit(): void {
    // Additional initialization logic can go here if needed
  }

  addCourse() {
    console.log('Adding course:', this.course);
    this.course.approved = false;
    this.courseService.createCourse(this.course).subscribe(
      response => {
        console.log('Course created successfully:', response);
        this.msg = 'Course created successfully!';
      },
      error => {
        console.error('Error creating course:', error);
        this.msg = 'Failed to create course.';
      }
    );
  }
}
