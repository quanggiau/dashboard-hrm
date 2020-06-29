import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

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
  option_departments: string[] = ['GA', 'DEV-EMS', 'DEV-BAS', 'BPO', 'DTP', 'Other'];
  option_projects: string[] = ['Other', 'OJT', 'Offshore', 'OJT-Training'];
  option_languages: string[] = ['None', 'English', 'JPN N5', 'JPN N4', 'JPN N3', 'JPN N2', 'JPN N1', 'Other'];
  // end Set selection for gender employee
  skillLists: string[] = ['Java', 'PHP', 'Ruby', 'Python', 'ReacJS', 'Other'];
  skillEmployee: string[];

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.emp = new employee();
    this.id = this.route.snapshot.params['empId'];
    this.employeeService.getEmp(this.id).subscribe(
      data => {
        this.emp = data;
        if (this.emp.empSkills != null) {
          this.skillEmployee = this.emp.empSkills.split(', ');
        }
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    )
  }
  
  Update() {
    if (this.skills.value != null) {
      this.emp.empSkills = this.skills.value.join(', ');
      this.employeeService.updateEmp(this.id, this.emp).subscribe(
        x => console.log('Observer got a next value: ' + x),
        err => console.error('Observer got an error: ' + err),
        () => console.log('Observer got a complete notification')
      );
    }
    this.router.navigate(['employee-list'])
  }
}
