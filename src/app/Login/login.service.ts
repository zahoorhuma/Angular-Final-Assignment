import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'https://api.escuelajs.co/api/v1'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  auth(loginData: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/auth/login`, loginData);
  }
}
