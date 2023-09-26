import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  user: any = {
    name: '',
    email: null,
    avatar: '',
    password: null,
  };
  message: string = '';

  constructor(private router: Router, private userService: UserService) {}
  submit() {
    this.userService.createUser(this.user).subscribe((user) => {
      console.log('new added user: ', user);
      try {
        if (user.id) {
          this.router.navigate(['users']);
        }
      } catch {
        console.log(user.status);
        this.message = user.message[0];
      }
    });
  }
}
