import { Component ,Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{
// @Input()
crsId=5;
crs:Course|null=new Course();

constructor(public crsService:CourseService,public ac:ActivatedRoute) {

  
  
}
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.crs = this.crsService.getCrs(this.crsId)
  // }
  ngOnInit(): void {
    this.crsId= this.ac.snapshot.params['id'];
    this.crs = this.crsService.getCrs(this.crsId)
  }
}
