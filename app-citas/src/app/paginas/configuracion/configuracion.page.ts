import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ConfiguracionComponent } from 'src/app/componentes/configuracion/configuracion.component';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonicModule, IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule, ConfiguracionComponent]
})
export class ConfiguracionPage implements OnInit {
  
  constructor() {}

  ngOnInit() {}
}
