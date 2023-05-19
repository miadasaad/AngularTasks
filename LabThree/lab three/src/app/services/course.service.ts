import { Injectable } from '@angular/core';
import { Course } from '../_models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses:Course[]= [
    new Course(1,"c++",15,15),
    new Course(2,"js",15,15),
    new Course(3,"json",15,15),
    new Course(4,"node",15,15),
  ];

  getAll(){
    return this.courses;
  }
  Add(crs:Course){
    this.courses.push(crs);
  }
  getCrs(n:any):Course|null{
    for (let i = 0; i < this.courses.length; i++) {
     if (this.courses[i].id == n) {
      return this.courses[i];
     }    
    }
    return null;
  }
  delete(n:any){
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].id == n) {
        this.courses.splice(i,1);
      }    
     }
  }
  constructor() { }
}









