import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  data = { user_username: '', user_password: '' };
  submitted = false;
  loading = false;


  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastController: ToastController) { }

  ngOnInit() {
    this.data.user_username = 'sistemas@parisautos.com.ar';
    this.data.user_password = 'nadarisca32';
  }
  onLogin() {
    this.submitted = true;
    this.loading = true;
    this.loginService
      .logIn(this.data.user_username, this.data.user_password)
      .subscribe(res => {
        this.router.navigate(['/home']);
        this.loading = false;
      }, err => {
        console.log(err);
        this.presentToast();
        this.loading = false;
      });

  }
  async presentToast() {
    const toast = await this.toastController.create({
      color: 'danger',
      message: 'Tu combinacion de usuario y contraseña no son validos.',
      duration: 3000,

    });
    toast.present();
  }

}
