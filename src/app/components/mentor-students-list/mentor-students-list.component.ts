import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment.service';
import { Enrollment } from '../../models/enrollment.model';

@Component({
  selector: 'app-mentor-students-list',
  templateUrl: './mentor-students-list.component.html',
  styleUrl: './mentor-students-list.component.css'
})
export class MentorStudentsListComponent implements OnInit {
  enrollment: Enrollment[] = [];

      constructor(private enrollmentService: EnrollmentService) {}

      ngOnInit(): void {
          this.enrollmentService.getStudents(mentorId: number).subscribe((data: Enrollment[]) => {
            console.log('Fetched Students:', data); // Debugging line to check the fetched data
            this.enrollment = data;
          });
        }

}
