// src/app/services/enrollment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollments } from '../models/enrollment.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = 'http://localhost:8080/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  createEnrollment(enrollment: Enrollments): Observable<Enrollments> {
    return this.http.post<Enrollments>(`${this.apiUrl}/create`, enrollment);
  }

  fetchAllEnrollmentDetails(): Observable<Enrollments[]> {
    return this.http.get<Enrollments[]>(`${this.apiUrl}/fetchAllEnrollmentDetails`);
  }

  fetchEnrollmentsByCourseID(courseID: number): Observable<Enrollments[]> {
    return this.http.get<Enrollments[]>(`${this.apiUrl}/fetchEnrollmentsByCourseID?courseID=${courseID}`);
  }

  fetchEnrollmentsByMentorID(mentorID: number): Observable<Enrollments[]> {
    return this.http.get<Enrollments[]>(`${this.apiUrl}/fetchEnrollmentsByMentorID?mentorID=${mentorID}`);
  }

  fetchEnrollmentsByNewJoinID(newJoinID: number): Observable<Enrollments[]> {
    return this.http.get<Enrollments[]>(`${this.apiUrl}/fetchByNewJoiner?newJoinID=${newJoinID}`);
  }
}
