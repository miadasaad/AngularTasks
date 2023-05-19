import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/_models/department';
import { ServiceDepartment } from 'src/app/services/service-department.service';

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css']
})
export class DepartmentDeleteComponent implements OnInit{

  dept: Department = new Department();
   constructor(public deptSer:ServiceDepartment,public ac:ActivatedRoute,public route:Router) {
  
    }
  ngOnInit(): void {
    this.ac.params.subscribe(data => {
      this.deptSer.getDept(data['id']).subscribe(r => {
        this.dept = r;
      })
    })
  }
delete(){
  this.deptSer.deleteDept(this.dept.id).subscribe(t => {
    this.route.navigateByUrl('/departments')
  })
}

}
