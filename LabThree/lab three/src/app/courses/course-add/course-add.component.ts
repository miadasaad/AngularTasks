import { Component } from '@angular/core';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {
 
  constructor(public crsService:CourseService) {
    
  }
crs:Course= new Course();

Add(){
  this.crsService.Add(this.crs);
}
}
