import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { LoginDataService } from '../login-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login = {
    email: '',
    password: '',
  };
  constructor(
    private loginService: LoginService,
    private loginDataService: LoginDataService,
    private router: Router
  ) {}
  loginHandler() {
    console.log(this.login);
    this.loginService.auth(this.login).subscribe((res: any) => {
      console.log(res);
      try {
        if (res.access_token) {
          console.log('in');
          this.loginDataService.setAuth(res.access_token);
          this.router.navigate(['products']);
        }
      } catch {
        console.log('Failed');
      }
    });
  }
}
