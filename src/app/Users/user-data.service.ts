import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private usersData: any[] = [];

  setUsersData(data: any[]) {
    this.usersData = data;
  }

  getUsersData() {
    return this.usersData;
  }
}
