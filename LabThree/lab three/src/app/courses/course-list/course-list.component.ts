import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{

courses:Course[]= [];
detailsId=5;
constructor(public crsService:CourseService) {

}
  ngOnInit(): void {
    this.courses= this.crsService.getAll();
  }
  delete(n:any){
     let res = confirm("are u sure u want to remove");
     if (res) {
      this.crsService.delete(n);
     }
  }
}
