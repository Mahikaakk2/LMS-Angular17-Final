export class Enrollments {
    // EnrollmentID: number; // Uncomment if you decide to include it
    mentorID: number;
    courseID: number;
    newJoinID: number;
  
    constructor(mentorID: number, courseID: number, newJoinID: number) {
      this.mentorID = mentorID;
      this.courseID = courseID;
      this.newJoinID = newJoinID;
    }
  }
  