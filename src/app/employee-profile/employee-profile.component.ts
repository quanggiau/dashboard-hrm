import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import {FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  id: number;
  emp: employee;

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
  skillEmployee : string[];
  
  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }
  
  ngOnInit() {
    this.emp = new employee();
    this.id = this.route.snapshot.params['empId'];
    //console.log(this.id);
    this.employeeService.getEmp(this.id).subscribe(
      data => { this.emp = data;
                //console.log('update', this.emp) 
                this.skillEmployee =  this.emp.empSkills.split(', '); // --> mang
                //console.log(this.skillEmployee);
                //console.log('befor',this.skillLists);
      } 
      
    );
   // console.log('aff',this.skillLists);
    
  }
  Update(){
    if(this.skills.value != null) {
      this.emp.empSkills = this.skills.value.join(', ');
   // console.log('skill after update', this.emp.empSkills );
    this.employeeService.updateEmp(this.id, this.emp).subscribe(
      err => console.log(err)
    );
    //this.employeeService.getEmps().subscribe();
    }
    
    this.router.navigate(['employee-list'])
  }
}
