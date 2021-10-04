import { Component } from '@angular/core';
import { UrlService } from './services/url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(
    private urlService:UrlService
    )
    {
    // this.urlService.getUsers().subscribe(res =>{
    //   console.log(res)
    // })
    this.urlService.getUrls().subscribe(res =>{
      console.log(res)
    })
  }
}
