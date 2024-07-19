import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { Query } from '../../models/query.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-queries',
  templateUrl: './mentor-queries.component.html',
  styleUrls: ['./mentor-queries.component.css']
})
export class MentorQueriesComponent implements OnInit {
  queries: Query[] = [];

  constructor(
    private queryService: QueryService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const mentorId = this.userService.getUserId() ?? 2;
    this.queryService.getQueriesByMentorIdAndStatus(mentorId,false).subscribe(
      (data: Query[]) => {
        this.queries = data;
      },
      error => {
        console.error('Error fetching queries:', error);
      }
    );
  }

  replyToQuery(queryId: number): void {
    this.router.navigate(['/query-reply', queryId]);
  }

  submitResponse(query: Query): void {
    const mentorId = this.userService.getUserId() ?? 2; // Assuming getUserId() retrieves mentorId
   
    this.queryService.updateQueryResponse(query.responseText,query.queryId).subscribe(
     
    );
  }
}
