import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  data = { user_username: '', user_password: '' };
  submitted = false;


  constructor(private loginService: LoginService) { }

  ngOnInit() { }
  onLogin() {
    console.log('boton apretado');
    this.loginService.logIn(this.data.user_username, this.data.user_password).subscribe(res => {
      console.log(res.data['data'])
    }, err => {
      console.warn(err)
    });

  }

}
