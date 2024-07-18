import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollment } from '../models/enrollment.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
private apiUrl = 'http://localhost:8080/api/fetchByMentor';

  constructor(private http: HttpClient) {}

  getStudents(mentorID: number): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.apiUrl}?mentorID=${mentorID}`);
  }
}
