import { Component, OnInit } from '@angular/core';
import {employee} from '../employee';
import {EmployeeService} from '../employee.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // checkauto:boolean=false;
  // save:string;
  // Set selection for gender employee
  myControl = new FormControl();
  myControl_Department = new FormControl();
  myControl_Projects = new FormControl();
  myControl_Language = new FormControl();
  skills = new FormControl();
  option_genders: string[] = ['Male', 'FeMale', 'Other'];
  option_departments: string[] = ['GA', 'DEV-EMS', 'DEV-BAS', 'BPO','DTP','Other'];
  option_projects: string[] = ['Other', 'OJT', 'Offshore', 'OJT-Training'];
  option_languages: string[] = ['None', 'English','JPN N5','JPN N4','JPN N3','JPN N2','JPN N1','Other'];
  // end Set selection for gender employee
  
  skillLists: string[] = ['Java', 'PHP', 'Ruby', 'Python', 'ReacJS', 'Other'];

  emp: employee = new employee();
  constructor(private empService: EmployeeService,  private router: Router) { 
}

  ngOnInit(): void {
    this.emp.empGender = this.option_genders [0]; // Male
    this.emp.empDepartment = this.option_departments[0]; // GA
    this.emp.empProjects = this.option_projects[0];
    this.emp.empLanguage = this.option_languages[0];
  }
  Create(){
    if(this.skills.value != null){
      this.emp.empSkills = this.skills.value.join(', ');
    }
    
    console.log(this.emp.empSkills);
    if(this.emp.empId!=undefined) 
    {

      console.log('this.emp',this.emp);
      this.empService.createEmp(this.emp).subscribe(data => {
        this.router.navigate(['/employee-list'])
      });
      
    }
  }
}
