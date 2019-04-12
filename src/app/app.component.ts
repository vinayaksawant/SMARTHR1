import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SMARTHR1';
  pageTitle = 'Smart HR1';
  //loading = true;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get isMessageDisplayed(): boolean {
    return true;
    //return this.messageService.isDisplayed;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService,
              private router: Router)
              //,private messageService: MessageService) 
              {
    // router.events.subscribe((routerEvent: Event) => {
    //   this.checkRouterEvent(routerEvent);
    // });
  }

  // checkRouterEvent(routerEvent: Event): void {
  //   if (routerEvent instanceof NavigationStart) {
  //     this.loading = true;
  //   }

  //   if (routerEvent instanceof NavigationEnd ||
  //       routerEvent instanceof NavigationCancel ||
  //       routerEvent instanceof NavigationError) {
  //     this.loading = false;
  //   }
  // }

  // displayMessages(): void {
  //   // Example of primary and secondary routing together
  //   // this.router.navigate(['/login', {outlets: { popup: ['messages']}}]); // Does not work
  //   // this.router.navigate([{outlets: { primary: ['login'], popup: ['messages']}}]); // Works
  //   this.router.navigate([{ outlets: { popup: ['messages'] } }]); // Works
  //   this.messageService.isDisplayed = true;
  // }

  // hideMessages(): void {
  //   this.router.navigate([{ outlets: { popup: null } }]);
  //   this.messageService.isDisplayed = false;
  // }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }  
}
