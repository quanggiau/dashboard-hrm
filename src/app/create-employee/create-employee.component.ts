import { Component, OnInit } from '@angular/core';
import {employee} from '../employee';
import {EmployeeService} from '../employee.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  emp: employee = new employee();
  // Set selection for gender employee
 // myControl = new FormControl();
 // options: string[] = ['Male', 'FeMale', 'Other'];
   // end Set selection for gender employee

  constructor(private empService: EmployeeService,  private router: Router) { }

  ngOnInit(): void {
    this.emp.empGender = 'Male';
    this.emp.empDepartment = 'GA';
  }
  Create(){
    //console.log('this.emp',this.emp.empId);
    if(this.emp.empId!=undefined) 
    {
      //console.log('this.emp',this.emp);
      this.empService.createEmp(this.emp).subscribe(data => {
        this.router.navigate(['/table-list'])
      });
      
    }
  }
}
