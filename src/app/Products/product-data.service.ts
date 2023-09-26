import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  private productsData: any[] = [];

  setProductsData(data: any[]) {
    this.productsData = data;
  }

  getProductsData() {
    return this.productsData;
  }
}
