import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../login.service'; 
import { user } from 'app/user';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user_login : user = new user(); //khoi tao moi cho doi tuong
  confirm : boolean = false;
  constructor(private router: Router, private login_Service : LoginService) { }

  ngOnInit(): void {
   // console.log("status: ", this.confirm);  
  }

  Login(){
  //  this.router.navigate(['/dashboard'])
  //let user = {username: 'admin2', password: '456'}
  this.login_Service.checkLogin(this.user_login).subscribe(
    data => { 
            this.confirm = data.status; // data = {status; login_status,...}
           // console.log('Status_from_serve: ', this.confirm)
            if (this.confirm == true) {
            this.router.navigate(['/dashboard'])}
             }
  );
 }
}
