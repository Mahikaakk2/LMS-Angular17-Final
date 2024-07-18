// src/app/components/updatecourse/updatecourse.component.ts
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {
  courses: Course[] = [];
  selectedCourse: Course | undefined;
  courseId: number = 0;

  constructor(private courseService: CourseService) {
    this.selectedCourse = new Course(0, '', '', '', '', '', false, 0);
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  onCourseChange(courseId: number): void {
    this.courseService.getCourseById(courseId).subscribe((course: Course) => {
      this.selectedCourse = course;
    });
  }

  updateCourse(): void {
    if (this.selectedCourse && this.courseId) {
      this.courseService.updateCourse(this.courseId, this.selectedCourse).subscribe(
        response => {
          console.log('Course updated successfully:', response);
        },
        error => {
          console.error('Error updating course:', error);
        }
      );
    }
  }
}
