import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ManejoConfiguracionService {

  private _permitirEliminar = true

  constructor() { }

  getPermitirEliminar(): boolean {
    return this._permitirEliminar
  }

  setPermitirEliminar(valor: boolean) {
    this._permitirEliminar = valor
  }

}