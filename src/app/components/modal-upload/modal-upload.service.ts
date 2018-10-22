import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalUploadService {

  public id: string;
  public tipo: string;
  public oculto: string;
  public notificacion = new EventEmitter<any>();

  constructor() {
    this.oculto = 'oculto';
  }

  ocultarModal() {
    this.oculto = 'oculto';
    this.tipo = null;
    this.id = null;
  }

  mostrarModal( tipo: string, id: string ) {
    this.oculto = '';
    this.tipo = tipo;
    this.id = id;
  }
}
