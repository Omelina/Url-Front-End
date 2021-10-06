import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router, private cookie:CookieService) { }

  setSession(authResult: any) {
    localStorage.setItem('token', authResult.token);
  }
  logout() {
    localStorage.removeItem('token');
    this.cookie.delete('t');
    this.router.navigate(['login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
} 

