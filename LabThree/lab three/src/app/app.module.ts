import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes,ROUTES } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { ErrorComponent } from './error/error.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';

const routes:Routes=[
  {path:"courses",component:CourseListComponent},
  {path:"courses/details/:id",component:CourseDetailsComponent},
  {path:"courses/add",component:CourseAddComponent},
  {path:"courses/update/:id",component:CourseEditComponent},
  {path:"",redirectTo:'courses',pathMatch:'full'},
  {path:"**",component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
