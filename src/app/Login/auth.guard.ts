// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LoginDataService } from './login-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private loginDataService: LoginDataService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(this.loginDataService.isAuthenticated());
    if (this.loginDataService.isAuthenticated()) {
      return true;
    } else {
      // Redirect to the login page if not authenticated
      this.router.navigate(['/']);
      return false;
    }
  }
}
