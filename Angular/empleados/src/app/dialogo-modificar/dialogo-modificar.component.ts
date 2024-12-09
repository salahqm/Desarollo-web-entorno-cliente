import { Component } from '@angular/core';
import { CuadroDialogoEmpleadoComponent } from '../cuadro-dialogo-empleado/cuadro-dialogo-empleado.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicioEmpService } from '../servicio-emp.service';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-dialogo-modificar',
  templateUrl: './dialogo-modificar.component.html',
  styleUrls: ['./dialogo-modificar.component.css']
})
export class DialogoModificarComponent {
  data: Empleado = {
    id: 0,
    nombre: '',
    direccion: '',
    cargo: '',
    edad: 0,
    imagen: ''
  };

  constructor(public dialogRef: MatDialogRef<CuadroDialogoEmpleadoComponent>, private servicioEmp: ServicioEmpService) { }
  guardarEmpleado() {

  }
  Cancelar() {
    this.dialogRef.close();
  }

}
