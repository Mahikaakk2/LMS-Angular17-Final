export class Enrollment {
  enrollmentID: number;
  mentorID: number;
  courseID: number;
  newJoinID: number;

  constructor(
    enrollmentID: number,
    mentorID: number,
    courseID: number,
    newJoinID: number
  ) {
    this.enrollmentID = enrollmentID;
    this.mentorID = mentorID;
    this.courseID = courseID;
    this.newJoinID = newJoinID;
  }
}
