import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  msg = '';
  selectedUserType: string = 'newjoiner'; // Default to new joiner
  credentials: any = {};

  constructor(private router: Router, private http: HttpClient, private userService: UserService) {}

  selectUserType(type: string) {
    this.selectedUserType = type;
  }

  login() {
    this.http.get<any>(`http://localhost:9000/api/fetch?email=${this.credentials.email}`)
      .pipe(
        catchError(error => {
          this.msg = 'Error fetching user details';
          return throwError(error);
        })
      )
      .subscribe(user => {
        if (user.password === this.credentials.password) {
          this.userService.setUserId(user.userId);
          this.userService.setEmail(this.credentials.email);

          if (this.selectedUserType === 'newjoiner') {
            this.router.navigate(['/newJoinerDashboard']);
          } else if (this.selectedUserType === 'mentor') {
            this.router.navigate(['/mentorDashboard']);
          } else if (this.selectedUserType === 'admin') {
            this.router.navigate(['/adminDashboard']);
          }
        } else {
          this.msg = 'Invalid email or password';
        }
      });
  }
}
