import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlI } from '../modules/url.interface';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urls:UrlI[] = [];

  constructor(private api:UrlService, private router:Router) { }

  ngOnInit(): void {
    this.api.getUrls().subscribe(data => {
      this.urls = data;
      console.log(data);
    })
  }

  onLogout(){
    localStorage.clear();
    this.api.logout().subscribe(data => {
      if(data.type_msg === "success"){
        this.router.navigate(['login']);
      }
    })
  }
}
