import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  id: number;
  emp: employee;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }
  
  ngOnInit() {
    this.emp = new employee();
    this.id = this.route.snapshot.params['empId'];
    console.log(this.id);
    this.employeeService.getEmp(this.id).subscribe(
      data => { this.emp = data; }
    );
  }
  Update(){
    this.employeeService.updateEmp(this.id, this.emp).subscribe(
      err => console.log(err)
    );
    //this.employeeService.getEmps().subscribe();
    this.router.navigate(['table-list'])
  }
}
