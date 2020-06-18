import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  employees = [];
  emp: employee;
  constructor( private empService: EmployeeService,  private router : Router) { }
  ngOnInit() {
    this.getEmps();
  }

  /* Take data from serve --> employees*/
  getEmps(): void {
   this.empService.getEmps().subscribe(
     data => {
      this.employees = data
     }
    ); // data sendto employees[]
  }
  
  Detail(empID: number){
    this.router.navigate([`employee-detail/${empID}`]);
    // this.empService.getEmp(empID).subscribe(data => this.emp = data);
  }

  Update(empID: number){
    //console.log('detail');
   // this.router.navigate([`user-profile/${empID}`]);
    this.router.navigate([`user-profile/${empID}`]);
    // this.empService.getEmp(empID).subscribe(data => this.emp = data);
  }
  deleteEmp(empID: number) {

    if (confirm("do you want to delete?")) {
      this.empService.deleteEmp(empID).subscribe(
        data => {
          console.log('dsdsd', data);
          alert(`Delete Successful! ${data}`);
          this.getEmps();
        }, error => console.log(error)
      );
    }
  }
  // Create new employee
  New_Employee(){
    this.router.navigate(['create-employee']);
  }
}
