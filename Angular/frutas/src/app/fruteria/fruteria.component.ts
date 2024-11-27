import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FrutaModule } from '../fruta/fruta.module';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-fruteria',
  templateUrl: './fruteria.component.html',
  styleUrls: ['./fruteria.component.css']
})
export class FruteriaComponent {
  mensaje!:string;

  listaFrutas!: FrutaModule[];

  constructor(private servicio: ServicioService) {
    this.servicio.leerFrutas().subscribe((Frutas: FrutaModule[]) => {
      this.listaFrutas = Frutas;
    })
  }



  frutaSeleccionada: FrutaModule = {
    id: 0,
    nombre: '',
    precio: 0,
    unidades: 0,
    imagen: ''
  }

  fruta!: FrutaModule;


  aniadirProducto(form: { value: FrutaModule; }) {
    this.servicio.crearFruta(form.value).subscribe((producto: FrutaModule) => {
      this.fruta = producto;
       // para refrescar la pagina
      this.servicio.leerFrutas().subscribe((Frutas: FrutaModule[]) => {
        this.listaFrutas = Frutas;
      })

      this.mensaje = 'Producto '+producto.nombre+' agregado exitosamente';
    })

  }


  eliminar(id:number) {
    this.servicio.eliminar(id).subscribe((producto:FrutaModule)=>{
      this.fruta = producto;
       // para refrescar la pagina
       this.servicio.leerFrutas().subscribe((Frutas: FrutaModule[]) => {
      this.listaFrutas = Frutas;
    })
    this.mensaje = 'Producto'+producto.nombre+' eliminado exitosamente';
    })

  }

  // para visualizar el producto seleccionado en el formulario
  modificar(producto:FrutaModule) {
    this.frutaSeleccionada = producto;
  }
  actualizarProducto(form:{value:FrutaModule;}) {
    form.value.id = this.fruta.id;
    form.value.nombre = this.fruta.nombre;
    form.value.precio = this.fruta.precio;
    form.value.unidades = this.fruta.unidades;
    form.value.imagen = this.fruta.imagen;
    this.servicio.actualizar(form.value).subscribe((producto: FrutaModule) => {
      this.fruta = producto;
      this.mensaje = 'Producto'+producto.nombre+' actualizado exitosamente';
    })

  }

  // Resetear el formulario igualando el valor por defecto que es frutaModule
  resetear() {
    this.frutaSeleccionada = new FrutaModule();
    this.mensaje = 'formulario reseteado';

  }



}
