import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalUploadImageService {

  oculto: string = 'hide';

  constructor() { }

  ocultarModal(){
    this.oculto = 'hide';
  }

  mostrarModal(){
    this.oculto = 'show';
  }
}
