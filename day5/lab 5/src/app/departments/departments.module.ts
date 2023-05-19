import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { FormsModule } from '@angular/forms';
import { DepartmentDeleteComponent } from './department-delete/department-delete.component';


@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentDetailComponent,
    DepartmentEditComponent,
    DepartmentAddComponent,
    DepartmentDeleteComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    FormsModule
  ]
})
export class DepartmentsModule { }
