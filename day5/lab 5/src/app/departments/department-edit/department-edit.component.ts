import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/_models/department';
import { ServiceDepartment } from 'src/app/services/service-department.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit{

  dept:Department = new Department();
  constructor(public deptSer:ServiceDepartment,public ac:ActivatedRoute,public router:Router) {
    
  }
  ngOnInit(): void {
    this.ac.params.subscribe(data => {
     this.deptSer.getDept(data['id']).subscribe(r => {
      this.dept = r;
     })
    })
    
  }
  save(){
    this.deptSer.updateDept(this.dept).subscribe(r => {
      this.dept = r;
      this.router.navigateByUrl('/departments')
    })
  }
}
