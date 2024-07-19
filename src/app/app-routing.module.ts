import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { NewJoinerDashboardComponent } from './components/new-joiner-dashboard/new-joiner-dashboard.component';
import { MentorDashboardComponent } from './components/mentor-dashboard/mentor-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { CourseliststudentComponent } from './components/courseliststudent/courseliststudent.component';
import { CourselistfalseComponent } from './components/courselistfalse/courselistfalse.component';
import { CourselisttrueComponent } from './components/courselisttrue/courselisttrue.component';
import { StudentQueriesComponent } from './components/student-queries/student-queries.component';
import { MentorListComponent } from './components/mentor-list/mentor-list.component';
import { NewJoinerListComponent } from './components/new-joiner-list/new-joiner-list.component';
import { UpdatecourseComponent } from './components/updatecourse/updatecourse.component';
import { CoursesbymentorComponent } from './components/coursesbymentor/coursesbymentor.component';
import { DeletecourseComponent } from './components/deletecourse/deletecourse.component';
import { ListQueriesComponent } from './components/list-queries/list-queries.component';
import { MentorQueriesComponent } from './components/mentor-queries/mentor-queries.component';
import { NewJoinerCoursesComponent } from './components/new-joiner-courses/new-joiner-courses.component';


const routes: Routes = [
  { path: '', component: WelcomepageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newJoinerDashboard', component: NewJoinerDashboardComponent },
  { path: 'mentorDashboard', component: MentorDashboardComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: 'addcourse', component: AddcourseComponent },
  { path: 'courseliststudent', component: CourseliststudentComponent },
  { path: 'courselistfalse', component: CourselistfalseComponent },
  { path: 'student-queries', component: StudentQueriesComponent },
  { path: 'courselistfalse', component: CourselistfalseComponent },
  { path: 'courselisttrue', component: CourselisttrueComponent },
  { path: 'mentorlist', component: MentorListComponent },
  { path: 'newjoinerlist', component: NewJoinerListComponent },
  { path: 'updatecourse', component: UpdatecourseComponent },
  { path: 'coursesbymentor', component: CoursesbymentorComponent },
  { path: 'deletecourse', component: DeletecourseComponent },
  { path: 'updatecourse', component: UpdatecourseComponent },
  {path: 'listNewJoinerQueries' , component: ListQueriesComponent},
  {path:'mentorQueries',component: MentorQueriesComponent},
  {path:'newJoinerCourses',component: NewJoinerCoursesComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
