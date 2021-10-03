import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {UrlI} from '../modules/url.interface';
import { Observable } from 'rxjs';
import { UserI } from '../modules/user.interface';
import { MessageI } from '../modules/message.interface';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  url:string = "http://localhost:3000/";

  constructor(
    private http: HttpClient
  ) {
    console.log("hola mundo")
   }

   getUsers():Observable<UserI[]>{
    let direction = this.url + "users/";
    return this.http.get<UserI[]>(direction);
  }

  login(form:UserI):Observable<MessageI>{
    let direction = this.url + "users/singin";
    return this.http.post<MessageI>(direction, form);
  }

   getUrls():Observable<UrlI[]>{
    let direction = this.url + "urls/";
    return this.http.get<UrlI[]>(direction);
  }
}
