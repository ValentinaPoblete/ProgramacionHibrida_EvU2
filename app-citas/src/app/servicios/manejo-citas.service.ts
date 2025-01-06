import { Injectable } from '@angular/core';
import { Cita } from '../modelo/modelo-cita';

@Injectable({
  providedIn: 'root'
})
export class ManejoCitasService {

  private _citas: Cita[] = [
    new Cita(1, "Luchar hasta el último aliento", "William Shakespeare"),
    new Cita(2, "El misterio de la vida no es un problema a resolver, sino una realidad a experimentar", "Frank Herbert"),
  ];

  constructor() { }

  getCitas(): Cita[] {
    return [...this._citas]
  }

  agregarCita(cita: Cita) {
    cita.id = this._citas.length ? this._citas[this._citas.length - 1].id + 1 : 1
    this._citas.push(cita)
  }

  eliminarCita(id: number) {
    this._citas = this._citas.filter((Cita) => Cita.id !== id)
  }

  obtenerCitaAleatoria(): Cita {
    const randomIndex = Math.floor(Math.random() * this._citas.length)
    return this._citas[randomIndex]
  }
  
}
