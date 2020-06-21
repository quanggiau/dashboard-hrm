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
  // Set selection for gender employee
  myControl = new FormControl();
  myControl_Department = new FormControl();
  myControl_Projects = new FormControl();
  option_genders: string[] = ['Male', 'FeMale', 'Other'];
  option_departments: string[] = ['GA', 'DEV-EMS', 'DEV-BAS', 'BPO','DTP','Other'];
  option_projects: string[] = ['Other', 'OJT', 'Offshore', 'OJT-Training'];
  // end Set selection for gender employee


  emp: employee = new employee();


  constructor(private empService: EmployeeService,  private router: Router) { }

  ngOnInit(): void {
    this.emp.empGender = this.option_genders [0]; // Male
    this.emp.empDepartment = this.option_departments[0]; // GA
    this.emp.empProjects = this.option_projects[0]
  }
  Create(){
    //console.log('this.emp',this.emp.empId);
    if(this.emp.empId!=undefined) 
    {
      //console.log('this.emp',this.emp);
      this.empService.createEmp(this.emp).subscribe(data => {
        this.router.navigate(['/employee-list'])
      });
      
    }
  }
}
