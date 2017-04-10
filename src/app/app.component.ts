import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  constructor(public authService: AuthService, private router: Router) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          if (auth.provider === 4) {
            this.user_displayName = auth.auth.email;
            this.user_email = auth.auth.email;
          } else if (auth.provider === google) {
            this.user_displayName = auth.google.displayName;
            this.user_email = auth.google.email;
          }
          this.isLoggedIn = true;
          console.log(auth);
          console.log("Logged in");
          this.router.navigate(['']);
        }
      }
    );
  }
}