import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { FormularioCitasComponent } from 'src/app/componentes/formulario-citas/formulario-citas.component';
import { Cita } from 'src/app/modelo/modelo-cita';
import { ManejoCitasService } from 'src/app/servicios/manejo-citas.service';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';


@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [ IonList, IonItem, IonLabel, IonButton, IonIcon, CommonModule, FormularioCitasComponent,
    IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar, FormsModule ]
})
export class GestionCitasPage implements OnInit {

  citas: Cita[] = [];

  constructor(private manejoCitasService: ManejoCitasService) {
    addIcons({trash});
  }

  ngOnInit() {
    this.cargarCitas();
  }

  cargarCitas(): void {
    this.citas = this.manejoCitasService.getCitas();
  }

  agregarCita(cita: Cita): void {
    this.manejoCitasService.agregarCita(cita); 
    this.cargarCitas(); 
  }

  
}
