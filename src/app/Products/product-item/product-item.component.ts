import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: any;
  constructor(private router: Router) {}
  viewProduct(item: string) {
    console.log(item);
    this.router.navigate(['product', item]);
  }
  editProduct(item: string) {
    console.log(item);
    this.router.navigate(['edit-product', item]);
  }
}
