import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cita } from 'src/app/modelo/modelo-cita';
import { IonList, IonItem, IonLabel, IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

@Component({
  selector: 'app-lista-cita',
  templateUrl: './lista-cita.component.html',
  styleUrls: ['./lista-cita.component.scss'],
  standalone: true,
})
export class ListaCitaComponent implements OnInit {

  @Input() citas: Cita[] = [];
  @Input() eliminacionHabilitada = false;
  @Output() citaEliminada = new EventEmitter<number>();

  constructor() {
    addIcons({trash});
  }

  ngOnInit() {}

  eliminarCita(id: number): void {
    this.citaEliminada.emit(id);
  }

  ionViewWillEnter() {
    console.log("ListaCitaComponent::ionViewWillEnter()")
  }
  
}
