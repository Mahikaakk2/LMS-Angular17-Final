export class Query {
  queryId: number;
  queryText: string;
  responseText: string;
  newJoinerId: number;
  mentorId: number;
  courseId: number;
  status: boolean;

  constructor(
    queryId: number,
    queryText: string,
    responseText: string,
    newJoinerId: number,
    mentorId: number,
    courseId: number,
    status: boolean
  ) {
    this.queryId = queryId;
    this.queryText = queryText;
    this.responseText = responseText;
    this.newJoinerId = newJoinerId;
    this.mentorId = mentorId;
    this.courseId = courseId;
    this.status = status;
  }
}
