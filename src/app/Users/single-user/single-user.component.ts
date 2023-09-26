import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css'],
})
export class SingleUserComponent {
  userId: number = 0;
  user: any = {};
  isUserClick: boolean = true;
  isConditionMet: boolean = false;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    // this.userService.getUserById(this.userId).subscribe((user) => {
    //   this.user = user;
    // });

    // this.userService.isAvailable(this.user.email).subscribe((res) => {
    //   this.isConditionMet = res.isAvailable;
    // });

    this.userService
      .getUserById(this.userId)
      .pipe(
        switchMap((user) => {
          this.user = user;
          console.log(this.user.email);
          return this.userService.isAvailable(this.user.email);
        })
      )
      .subscribe((res) => {
        this.isConditionMet = res.isAvailable;
      });
  }

  editUser() {
    this.isUserClick = false;
  }

  saveUser() {
    this.isUserClick = true;

    this.userService
      .updateUser(this.userId, this.user.name)
      .subscribe((user) => {
        console.log(user);
      });
    // this.router.navigate(['users']);
  }
}
