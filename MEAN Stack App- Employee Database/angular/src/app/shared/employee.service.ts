import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employee: Employee[];
  readonly url='http://localhost:3000';

  constructor(private http:HttpClient) { }

  postEmployee(emp: Employee){
    return this.http.post(this.url, emp);
  }

  getEmployeeList(){
    return this.http.get(this.url);
  }

  putEmployee(emp: Employee){
    return this.http.put(this.url+`/${emp._id}`, emp);
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.url+`/${_id}`);
  }
}
