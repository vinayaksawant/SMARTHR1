import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  pageTitle : string= "Just Employee Landing Page"
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }  
}