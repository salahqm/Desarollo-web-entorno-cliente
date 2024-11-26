import { Component } from '@angular/core';
import { FrutaModule } from '../fruta/fruta.module';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-fruteria',
  templateUrl: './fruteria.component.html',
  styleUrls: ['./fruteria.component.css']
})
export class FruteriaComponent {

  listaFrutas!: FrutaModule[];

  constructor(private servicio: ServicioService) {
    this.servicio.leerFrutas().subscribe((Frutas: FrutaModule[]) => {
      this.listaFrutas = Frutas;
    })
  }



  actualizarProducto() {
    throw new Error('Method not implemented.');
  }
  aniadirProducto() {
    throw new Error('Method not implemented.');
  }



}
