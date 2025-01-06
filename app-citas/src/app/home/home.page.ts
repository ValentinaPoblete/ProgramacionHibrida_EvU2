import { Component, inject, OnInit } from '@angular/core';
import { IonButtons, IonButton, IonIcon, IonFab, IonFabButton, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';
import { add } from 'ionicons/icons';
import { CitaAleatoriaComponent } from '../componentes/cita-aleatoria/cita-aleatoria.component';
import { ManejoCitasService } from '../servicios/manejo-citas.service';
import { Cita } from '../modelo/modelo-cita';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ CitaAleatoriaComponent, RouterModule, IonButtons, IonButton, IonIcon, IonFab, IonFabButton, IonHeader, IonToolbar, IonTitle, IonContent],
})

export class HomePage implements OnInit {

  citaAleatoria: Cita | null = null;

  private citasService = inject(ManejoCitasService);

  constructor() {
    addIcons({
      settingsOutline, add
    })
  }

  ngOnInit(): void {
    this.cargarCitaAleatoria()
  }

  cargarCitaAleatoria(): void {
    this.citaAleatoria = this.citasService.obtenerCitaAleatoria();
  }

}
