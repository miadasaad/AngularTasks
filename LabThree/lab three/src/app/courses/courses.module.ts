import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';
import { FormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './course-details/course-details.component';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseAddComponent,
    CourseEditComponent,
    CourseDeleteComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  exports:[CourseAddComponent,CourseEditComponent,CourseListComponent,CourseDeleteComponent]
})
export class CoursesModule { }
