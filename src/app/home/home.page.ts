import { HomeService } from './../services/home.service';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  persona = { nombre: '', apellido: '', dni: '', telefono: '' };
  loading = false;



  constructor(private homeService: HomeService, private toastController: ToastController) { }
  onAgregar() {
    this.loading = true;
    this.homeService.agregarPersona(this.persona.nombre, this.persona.apellido, this.persona.dni, this.persona.telefono).subscribe(res => {
      console.log(res);
      this.loading = false;
      this.successToast();
    }, err => {
      console.log(err);
      this.loading = false;

    });
  }
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
