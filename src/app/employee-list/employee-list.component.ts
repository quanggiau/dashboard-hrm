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
  emp: employee;
  check = true;
  constructor(private empService: EmployeeService, private router: Router) { }
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

  Detail(empID: number) {
    this.router.navigate([`employee-detail/${empID}`]);
    // this.empService.getEmp(empID).subscribe(data => this.emp = data);
  }

  // **** Update employee *******/
  Update(empID: number) {
    this.router.navigate([`employee-profile/${empID}`]);
    // employee profile == user frofile
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
}
