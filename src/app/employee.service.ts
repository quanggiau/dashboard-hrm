import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {employee} from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  /* Url get one Employee by emp_id */
  private empUrl_get_one_emp = 'http://192.168.4.202:8080/get_one_emp';
  //private empUrl_get_one_emp = 'http://localhost:8080/get_one_emp';

  /* Url Update Employee */
  private empUrl_update = 'http://192.168.4.202:8080/update';
 // private empUrl_update = 'http://localhost:8080/update';

  /* Url get all Employee */
  private empUrl_getAll = 'http://192.168.4.202:8080/get_all_emps';
  //private empUrl_getAll = 'http://localhost:8080/get_all_emps';

   /* Url delete Employee by emp_id */
  private empUrl_delete = 'http://192.168.4.202:8080/delete';
  //private empUrl_delete = 'http://localhost:8080/delete';
   
   /* Url create Employee*/
  private empUrl_create_emp = 'http://192.168.4.202:8080/createEmp';
  //private empUrl_create_emp = 'http://localhost:8080/createEmp';
  
  constructor(private http: HttpClient) { }

  /*** Get all employee from serve **/
  getEmps(): Observable<employee[]>{
    return this.http.get<employee[]>(`${this.empUrl_getAll}`)  // get('array')
  }

  /* Get get one Employee by emp_id from server */
  getEmp(Emp_Id: number): Observable<employee>{
    return this.http.get<employee>(`${this.empUrl_get_one_emp}/${Emp_Id}`)
  }
  /* Create an employee */
  createEmp (emp: Object): Observable<Object>{      
    return this.http.post(`${this.empUrl_create_emp}`,emp);   //post all//
   // return this.http.post(`http://localhost:8080/createEmp`, emp);
  }

  /*** Update Employees ***/
  updateEmp (empID: number, value: any): Observable<Object>{
    return this.http.put(`${this.empUrl_update}/${empID}`, value);
  }

  /** Delete Employees by id from the server */
  deleteEmp (empID: number): Observable<any>{
    return this.http.delete(`${this.empUrl_delete}/${empID}`);
  }

  /** Delete muti Employees by checkbox */
  delete_muti_Emp_checkbox (save_temp): Observable<any>{
    return this.http.delete(`/delete_muti_emp`);
  }
}
