
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from '../modules/user.interface';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
      user : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    })
    
  constructor(private api:UrlService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form:UserI){
    this.api.login(form).subscribe(data => {
      if(data.type_msg === 'success'){
        this.router.navigate(['dashboard']);
      }else{
        console.log('try again');
      }
    })
  }

}
