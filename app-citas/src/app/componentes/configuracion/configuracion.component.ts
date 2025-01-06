import { Component, OnInit } from '@angular/core';
import { ManejoConfiguracionService } from 'src/app/servicios/manejo-configuracion.service';
import { IonItem, IonLabel, IonToggle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonToggle]
})
export class ConfiguracionComponent implements OnInit {
  
  permitirEliminar: boolean;

  constructor(private configuracionService: ManejoConfiguracionService) {
    this.permitirEliminar = this.configuracionService.getPermitirEliminar();
  }

  toggleEliminacion(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.configuracionService.setPermitirEliminar(isChecked);
  }

  ngOnInit() {}
}
