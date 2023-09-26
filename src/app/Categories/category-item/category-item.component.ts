import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css'],
})
export class CategoryItemComponent {
  @Input() category: any;
  constructor(private router: Router) {}
  viewCategory(id: number) {
    console.log(id);
    this.router.navigate(['category', id]);
  }
}
