import { Component,OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-coursesbymentor',
  templateUrl: './coursesbymentor.component.html',
  styleUrl: './coursesbymentor.component.css'
})
export class CoursesbymentorComponent implements OnInit {
  
  courses: Course[] = [];
 
  constructor(private userService: UserService,private courseService: CourseService,private http: HttpClient) {}

  ngOnInit(): void {
      const userID= this.userService.getUserId();
      if(userID!=undefined)
      {
        this.courseService.getCoursesByMentor(userID).subscribe((data: Course[]) => {
          console.log('Fetched courses:', data); // Debugging line to check the fetched data
          this.courses = data;
          console.log('Filtered courses:', this.courses); // Debugging line to check the filtered data
      
      });
    }
    }

  enroll(course: any) {
      // Logic to handle enrollment
      console.log(`Enrolling in course: ${course.courseTitle}`);
      // Implement your enrollment logic here, such as navigating to a new page or displaying a message.
    }
   
}
