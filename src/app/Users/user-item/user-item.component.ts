import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent {
  @Input() user: any;
  backgroundColor: string = 'white';
  constructor(private router: Router) {}

  viewUser(id: number) {
    this.router.navigate(['user', id]);
  }
}
