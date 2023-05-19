import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class ServiceDepartment {

  baseUrl:string='https://localhost:7010/api/department/'
  constructor(public http:HttpClient) { }
  getAll(){
   return this.http.get<Department[]>(this.baseUrl);
  }
  getDept(id:number){
     return this.http.get<Department>(this.baseUrl+id)
  }
  addDept(dept:Department){
     return this.http.post(this.baseUrl,dept);
  }
  deleteDept(id:number){
     return this.http.delete(this.baseUrl+id)
  }
  updateDept(dept:Department){
    return this.http.put<Department>(this.baseUrl+dept.id,dept)
  }

}
