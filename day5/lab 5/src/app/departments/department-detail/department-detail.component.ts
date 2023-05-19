import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Department } from 'src/app/_models/department';

import { ServiceDepartment } from 'src/app/services/service-department.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnDestroy ,OnInit{

  dept:Department = new Department();
  sub:Subscription|null = null;
  constructor(public deptSer:ServiceDepartment,public ac:ActivatedRoute) {
   
   
  }
  ngOnInit(): void {
    this.sub = this.ac.params.subscribe(data => {
      this.deptSer.getDept(data['id']).subscribe(d=>{
        this.dept = d;
      })
      })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  getDetail(){

  }
}
