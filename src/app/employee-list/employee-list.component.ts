import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { employee } from '../employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees = [];
  employees_1 = [];
  emp: employee;
  check = true;
  empsLimit:any = [];
  start_number: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;
  i: number = 0;

  constructor(private empService: EmployeeService, private router: Router) { }
  ngOnInit() {
    this.getEmps();
    this.EmpLimit();
    
  }

  /* Take data from serve --> employees*/
  getEmps(): void {
    this.empService.getEmps().subscribe(
      data => {
        this.employees_1 = data
      }
    ); 
    this.empService.paging(0 , 10).subscribe(
      data => {
        this.employees = data
      }
    )
  }

  Detail(empID: number) {
    this.router.navigate([`employee-detail/${empID}`]);
  }

  // **** Update employee *******/
  Update(empID: number) {
    this.router.navigate([`employee-profile/${empID}`]);
  }
  // **** *************** *******/

  deleteEmp(empID: number) {
    this.empService.deleteEmp(empID).subscribe(
      data => {
      },
      error => console.log(error),
      () => {
        alert("delete succesfull!");
        this.getEmps();
      }
    );
  }

  // Create new employee
  New_Employee() {
    this.router.navigate(['create-employee']);
  }

  checkauto: boolean = false;
  save: string;
  save_temp = [];
  SaveIDEmp(event: Event) {
    this.checkauto = (event.target as HTMLInputElement).checked;
    if (this.checkauto == true) {
      this.save += (event.target as HTMLInputElement).value + ',';
    }
    else {
      this.save = this.save.replace((event.target as HTMLInputElement).value + ',', "");
    }
    //alert(this.save.replace("undefined",""));
    this.save = this.save.replace("undefined", "");
    // console.log('checkbox_value',this.save);
    this.save_temp = this.save.split(',');
  }

  delete_muti_Emp_checkbox() {
    console.log('xx', this.save_temp);
    this.empService.delete_muti_Emp_checkbox(this.save_temp).subscribe(
      data => {
        alert("delete succesfull!");
      },
      error => {
        console.log(error)
        alert("delete failed!");
      },
      () => {
        this.getEmps();
        this.save = "";
      }
    );
  }

  /***pagination **/
  /*** get employee with limit   **/
  EmpLimit(){
    this.empService.paging(this.start_number, this.pageSize).subscribe(
      data => {
        this.empsLimit = data;
        this.employees = data;
        console.log('data:',this.empsLimit)
      },
      error => {

      },
      () => {

      }
    );
  }

  /*** get employee with nextpage   **/
  getLimit(start_number, limit, current){
    this.currentPage = current;
    this.EmpLimit();
  }

  numberOfPages(){
    return Math.ceil(this.employees_1.length/this.pageSize);
  }

}
