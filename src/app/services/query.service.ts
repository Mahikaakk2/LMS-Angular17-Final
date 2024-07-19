// src/app/services/course.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Query } from '../models/query.model';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private apiUrl = 'http://localhost:8070/api';

  constructor(private http: HttpClient) {}

  createQuery(query:Query,): Observable<Query> {
    return this.http.post<Query>(`${this.apiUrl}/create`,query);
  }

  getQueries(): Observable<Query[]> {
    return this.http.get<Query[]>(`${this.apiUrl}/fetchAll`);
  }

  getNewJoinerQueries(newJoinerId: number): Observable<Query[]> {
    return this.http.get<Query[]>(`${this.apiUrl}/fetchByNewJoinerId?newJoinerId=${newJoinerId}`);
  }

  getMentorQueries(mentorId:number): Observable<Query[]>{
    return this.http.get<Query[]>(`${this.apiUrl}/fetchByMentorId?mentorId=${mentorId}`);
  }

  //for updating the queryresponse by mentor
  updateQueryResponse(responseText:String,queryId:number): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/update?queryId=${queryId}`,responseText);
  }

  //for fetching the queries by mentorId whose status is false
  getQueriesByMentorIdAndStatus(mentorId:number,status:boolean): Observable<Query[]>{
    return this.http.get<Query[]>(`${this.apiUrl}/fetchByMentorIdStatus?mentorId=${mentorId}&status=${status}`);
  } 
}
