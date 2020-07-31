import { HomeService } from './../services/home.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  personaForm;
  loading = false;

  constructor(private homeService: HomeService, private toastController: ToastController) { }
  ngOnInit(): void {
    this.personaForm = new FormGroup({
      nombre: new FormControl('',
        [
          Validators.required,
          Validators.minLength(3),
        ]),
      apellido: new FormControl('',
        [
          Validators.required,
          Validators.minLength(3)
        ]),
      telefono: new FormControl('',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(12)
        ]),
      dni: new FormControl('',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(9)
        ])
    });
  }

  onAgregar() {
    this.loading = true;

    this.homeService.agregarPersona(
      this.personaForm.controls.nombre.value,
      this.personaForm.controls.apellido.value,
      this.personaForm.controls.telefono.value,
      this.personaForm.controls.dni.value
    ).subscribe(res => {
      console.log(res);
      this.loading = false;
      this.successToast();
      this.personaForm.reset();
    }, err => {
      console.log(err);
      this.loading = false;
      this.dangerToast();
    });
  }

  //***** TOASTS  *******//
  async successToast() {
    const toast = await this.toastController.create({
      color: 'success',
      message: 'Registro cargado.',
      duration: 1000,
    });
    toast.present();
  }

  async dangerToast() {
    const toast = await this.toastController.create({
      color: 'danger',
      message: 'Algo malo paso, no podemos registrar ahora.',
      duration: 1000,
    });
    toast.present();
  }

}
