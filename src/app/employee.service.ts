import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {employee} from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 // private empUrl = 'http://192.168.4.202:8080/emps';
 private empUrl = 'http://localhost:8080/emps';
  
  constructor(private http: HttpClient) { }

  /* Get data  'array'employee[] from serve */
  getEmps(): Observable<employee[]>{
    return this.http.get<employee[]>(`${this.empUrl}`)  // get('array')
  }
  /* Get data ''employee from serve ++ select one employee */
  getEmp(Emp_Id: number): Observable<employee>{
    return this.http.get<employee>(`${this.empUrl}/${Emp_Id}`)
  }
  /* Create an employee */
  createEmp (emp: Object): Observable<Object>{      
    //return this.http.post(`http://192.168.4.202:8080/createEmp`, emp);   //post all//
    return this.http.post(`http://localhost:8080/createEmp`, emp);
  }

  /** Update Employees */
  updateEmp (empID: number, value: any): Observable<Object>{
    return this.http.put(`${this.empUrl}/${empID}`, value);
  }

  /** Delete Employees by id from the server */
  deleteEmp (empID: number): Observable<any>{
    return this.http.delete(`${this.empUrl}/${empID}`);
  }
}
