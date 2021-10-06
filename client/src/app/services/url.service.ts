import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {UrlI} from '../modules/url.interface';
import { Observable } from 'rxjs';
import { UserI } from '../modules/user.interface';
import { MessageI } from '../modules/message.interface';
import { AuthService } from './auth-service.service';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  url:string = "http://localhost:3000/";

  constructor(
    private http: HttpClient, private auth: AuthService, private cookie:CookieService
  ) {
   }

   getUsers():Observable<UserI[]>{
    let direction = this.url + "users/";
    return this.http.get<UserI[]>(direction);
  }

  getCode(code:string):Observable<UrlI>{
    let direction = this.url + code;
    console.log(direction);
    return this.http.get<UrlI>(direction, {withCredentials: true});
  }

  login(form:UserI):Observable<MessageI>{
    let direction = this.url + "users/singin";
    return this.http.post<MessageI>(direction, form).pipe(
      tap(res => this.auth.setSession(res)))
  }

   getUrls():Observable<UrlI[]>{
    let direction = this.url + "urls/";
    return this.http.get<UrlI[]>(direction, {withCredentials: true});
  }

  logout():Observable<MessageI>{
    this.auth.logout();
    this.cookie.delete('t');
    let direction = this.url + "users/logout";
    return this.http.get<MessageI>(direction);
  }
}
