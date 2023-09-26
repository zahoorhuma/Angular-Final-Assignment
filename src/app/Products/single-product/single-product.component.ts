import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent {
  productId: number = 0;
  selectedImage: number = 0;
  product: any = {};
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
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
    });
  }

  imageClick(i: number) {
    this.selectedImage = i;
  }
}
