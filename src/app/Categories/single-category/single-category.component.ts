import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
})
export class SingleCategoryComponent {
  categoryId: number = 0;
  category: any = {};
  isCategoryClick: boolean = true;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.categoryId = params['id'];
      console.log('Product ID:', this.categoryId);
    });
    this.categoryService
      .getCategoryById(this.categoryId)
      .subscribe((product) => {
        this.category = product;
      });
  }
  editCategory() {
    this.isCategoryClick = false;
  }
  saveCategory() {
    this.isCategoryClick = true;
    this.categoryService
      .updateCategory(this.categoryId, this.category.name)
      .subscribe((category) => {
        console.log(category);
      });
    this.router.navigate(['products']);
  }
}
