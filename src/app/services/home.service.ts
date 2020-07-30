import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private dataService: DataService) { }

  agregarPersona(nombre, apellido, telefono, dni) {
    let req = {
      data: {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        dni: dni
      }
    }
    return this.dataService.postData('personas', req);
  }
}
