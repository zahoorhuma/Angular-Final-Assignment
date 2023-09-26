import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: any = [];
  constructor(
    private userService: UserService,
    private userDataService: UserDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe((user: any[]) => {
      console.log(user);
      this.userDataService.setUsersData(user);
      this.users = this.userDataService.getUsersData();
    });
  }
  addCategory() {
    this.router.navigate(['add-user']);
  }
}
