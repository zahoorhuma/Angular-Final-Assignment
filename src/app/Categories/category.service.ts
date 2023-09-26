import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'https://api.escuelajs.co/api/v1'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/categories`);
  }

  getCategoryById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/categories/${productId}`);
  }

  createCategory(productData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/categories`, productData);
  }

  updateCategory(productId: number, productData: any): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}/categories/${productId}`,
      productData
    );
  }
}
