import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  category: any = {
    name: '',
    image: '',
  };
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}
  submitForm() {
    console.log(this.category);
    this.categoryService.createCategory(this.category).subscribe((category) => {
      console.log('new added product : ', category);
      this.router.navigate(['products']);
    });
  }
}
