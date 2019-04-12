import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;
  currentUser : User;
  message : string;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(userName: string, password: string) : void{
    if (!userName || !password) {
      //this.messageService.addMessage('Please enter your userName and password');
      this.message = 'Please enter your userName and password';
      //alert('Please enter your userName and password');

      return;
    }
    if (userName === 'admin') {
      this.currentUser = {
        id: 1,
        userName: userName,
        isAdmin: true
      };
      this.message = this.message + 'Admin login';
      //alert('Admin login');      
      // this.messageService.addMessage('Admin login');
      return;
    }
    this.currentUser = {
      id: 2,
      userName: userName,
      isAdmin: false
    };
    this.message = this.message + `User: ${this.currentUser.userName} logged in`;
    //alert(`User: ${this.currentUser.userName} logged in`);          
    // this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
  }
  logout(): void {
    this.currentUser = null;
  }
  constructor() { }
}
