import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductDataService } from '../product-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: any = [];
  constructor(
    private productService: ProductService,
    private productDataService: ProductDataService,
    private router: Router
  ) {}

  ngOnInit() {
    // Example usage:
    this.productService.getAllProducts().subscribe((products) => {
      this.productDataService.setProductsData(products);
      this.products = this.productDataService.getProductsData();
    });
  }
  addProduct() {
    this.router.navigate(['add-product']);
  }
}
