import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UrlService } from './services/url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Url Shrinker';
  cookieValue: any;

  constructor(
    private urlService:UrlService, private cookie:CookieService
    )
    {
    this.urlService.getUsers().subscribe(res =>{
      console.log(res)
    })
    // this.urlService.getUrls().subscribe(res =>{
    //   console.log(res)
    // })

    this.cookieValue = localStorage.getItem('token');
  }

  ngOnInit(): void {
    this.cookie.set('t' , this.cookieValue);
    this.cookie.get('t');
  }
}
