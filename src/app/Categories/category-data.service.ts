import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryDataService {
  private categoryData: any[] = [];

  setCategoryData(data: any[]) {
    this.categoryData = data;
  }

  getCategoryData() {
    return this.categoryData;
  }
}
