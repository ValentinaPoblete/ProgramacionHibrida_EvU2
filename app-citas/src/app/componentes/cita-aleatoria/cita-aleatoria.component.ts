import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/modelo/modelo-cita';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-cita-aleatoria',
  templateUrl: './cita-aleatoria.component.html',
  styleUrls: ['./cita-aleatoria.component.scss'],
  standalone: true,
  imports: [IonLabel, IonCardContent, IonCard, CommonModule ]
})
export class CitaAleatoriaComponent {

  @Input() cita: Cita | null = null;

  constructor() {}

}
