import { Component ,OnInit } from '@angular/core';
import { ServiceDepartment } from '../services/service-department.service';
import { Department } from '../_models/department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit{

  depts: Department[] = [];
constructor(public deptSer:ServiceDepartment) {
  
}
  ngOnInit(): void {
    //this.depts= this.deptSer.getAll()
    this.deptSer.getAll().subscribe(a => {
      console.log(a);     
      this.depts = a;
    })
  }

  delete(id:number){
       this.deptSer.deleteDept(id).subscribe(r => {
      console.log(r);      
       })
  }
}
