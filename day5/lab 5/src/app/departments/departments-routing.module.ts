import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentDeleteComponent } from './department-delete/department-delete.component';

const routes: Routes = [
  { path: '', component: DepartmentsComponent },
  { path: 'details/:id', component: DepartmentDetailComponent },
  { path: 'add', component: DepartmentAddComponent },
  { path: 'update/:id', component: DepartmentEditComponent },
  { path: 'delete/:id', component: DepartmentDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
