export class Enrollment {
  enrollmentID: number;
  mentorID: number;
  courseID: number;
  newJoinID: number;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    enrollmentID: number,
    mentorID: number,
    courseID: number,
    newJoinID: number,
    createdBy: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.enrollmentID = enrollmentID;
    this.mentorID = mentorID;
    this.courseID = courseID;
    this.newJoinID = newJoinID;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
