import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  pageTitle : string= "Just Employee Landing Page"
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

}
