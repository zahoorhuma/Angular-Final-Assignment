import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://api.escuelajs.co/api/v1'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products`);
  }

  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/products/${productId}`);
  }

  createProduct(productData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/products`, productData);
  }

  updateProduct(productId: number, productData: any): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}/products/${productId}`,
      productData
    );
  }
}
