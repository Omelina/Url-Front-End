import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router) { }

  setSession(authResult: any) {
    localStorage.setItem('token', authResult.token);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
} 

