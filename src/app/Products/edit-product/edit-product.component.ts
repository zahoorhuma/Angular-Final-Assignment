import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  productId: number = 0;
  product: any = {};
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      // Access individual route parameters by name
      this.productId = params['id']; // 'id' should match the parameter name defined in your route configuration
      console.log('Product ID:', this.productId);
    });
    this.productService.getProductById(this.productId).subscribe((product) => {
      // Handle the single product here
      this.product = product;
      console.log(product);
    });
  }
  submitDetails() {
    this.productService
      .updateProduct(this.productId, this.product)
      .subscribe((product) => {
        console.log(product);
      });
    this.router.navigate(['products']);
  }
}
