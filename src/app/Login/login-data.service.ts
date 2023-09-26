import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginDataService {
  isAuthenticate: boolean = false;

  setAuth(token: string) {
    if (token) {
      this.isAuthenticate = true;
    }
  }
  isAuthenticated() {
    return this.isAuthenticate;
  }
}
