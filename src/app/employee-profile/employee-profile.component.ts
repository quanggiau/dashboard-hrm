import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  id: number;
  emp: employee;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }
  
  ngOnInit() {
    this.emp = new employee();
    this.id = this.route.snapshot.params['empId'];
    console.log(this.id);
    this.employeeService.getEmp(this.id).subscribe(
      data => { this.emp = data;
                console.log('update', this.emp) }
    );
  }
  Update(){
    this.employeeService.updateEmp(this.id, this.emp).subscribe(
      err => console.log(err)
    );
    //this.employeeService.getEmps().subscribe();
    this.router.navigate(['employee-list'])
  }
}
