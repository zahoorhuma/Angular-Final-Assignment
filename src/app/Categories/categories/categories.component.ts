import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { CategoryDataService } from '../category-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categories: any = [];
  constructor(
    private categoryService: CategoryService,
    private categoryDataService: CategoryDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe((category: any[]) => {
      console.log(category);
      this.categoryDataService.setCategoryData(category);
      this.categories = this.categoryDataService.getCategoryData();
    });
  }
  addCategory() {
    this.router.navigate(['add-category']);
  }
}
