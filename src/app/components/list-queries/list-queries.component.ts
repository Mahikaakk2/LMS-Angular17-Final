import { Component ,OnInit} from '@angular/core';
import { Query } from '../../models/query.model';
import { QueryService } from '../../services/query.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-queries',
  templateUrl: './list-queries.component.html',
  styleUrl: './list-queries.component.css'
})
export class ListQueriesComponent implements OnInit {

  queries: Query[] = [];

  constructor(private queryService: QueryService,private userService: UserService) {}

  ngOnInit(): void {

    const newJoinerId = this.userService.getUserId()??0;
    this.queryService.getNewJoinerQueries(newJoinerId).subscribe(
      (data: Query[]) => {
        this.queries = data;
      },
      error => {
        console.error('Error fetching queries:', error);
      }
    );
  }
}
