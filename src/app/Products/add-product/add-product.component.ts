import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  product: any = {
    title: '',
    price: null,
    description: '',
    categoryId: null,
    images: [''],
  };
  constructor(private productService: ProductService, private router: Router) {}
  submitForm() {
    console.log(this.product);
    this.productService.createProduct(this.product).subscribe((product) => {
      console.log('new added product : ', product);
      this.router.navigate(['products']);
    });
  }
}
