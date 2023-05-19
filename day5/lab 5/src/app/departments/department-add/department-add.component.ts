import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/_models/department';
import { ServiceDepartment } from 'src/app/services/service-department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent {

dept:Department= new Department();
constructor(public deptSer:ServiceDepartment ,public router:Router) {
  
}
save(){
this.deptSer.addDept(this.dept).subscribe(r => {
  // this.dept=r;
  this.router.navigateByUrl('/departments')
})
}
}
