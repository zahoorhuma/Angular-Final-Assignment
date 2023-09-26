import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://api.escuelajs.co/api/v1'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${userId}`);
  }

  createUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users`, userData);
  }

  updateUser(userId: number, userData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/users/${userId}`, userData);
  }
  isAvailable(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/is-available`, {
      email: email,
    });
  }
}
