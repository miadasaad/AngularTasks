import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  crs:Course|null = new Course();

  constructor( public crsService:CourseService,public ac:ActivatedRoute) {   

  }
  ngOnInit(): void {
    //this.crs?.id= this.ac.snapshot.params['id'];
    
   this.crs = this.crsService.getCrs(this.ac.snapshot.params['id']);
    console.log(this.crs?.id);
    
  }

  save(){
    
  }
}
