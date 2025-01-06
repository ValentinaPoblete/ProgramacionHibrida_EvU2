import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Cita } from 'src/app/modelo/modelo-cita';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInput, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-formulario-citas',
  templateUrl: './formulario-citas.component.html',
  styleUrls: ['./formulario-citas.component.scss'],
  standalone: true,
  imports: [ CommonModule, IonText,  IonInput, IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonCard,  FormsModule ]
})
export class FormularioCitasComponent  implements OnInit {

  @Output() citaAgregada = new EventEmitter<Cita>();
  nuevaCita: Cita = new Cita(0);

  constructor() { }

  agregarCita(): void {
    this.citaAgregada.emit(this.nuevaCita);
    this.nuevaCita = new Cita(0);
  }

  ngOnInit() {}

}
