import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicioEmpService } from '../servicio-emp.service';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-cuadro-dialogo-empleado',
  templateUrl: './cuadro-dialogo-empleado.component.html',
  styleUrls: ['./cuadro-dialogo-empleado.component.css']
})
export class CuadroDialogoEmpleadoComponent {

  data: Empleado = {
    id: 0,
    nombre: '',
    direccion: '',
    cargo: '',
    edad: 0,
    imagen: ''
  };

  constructor(public dialogRef: MatDialogRef<CuadroDialogoEmpleadoComponent>, private servicioEmp: ServicioEmpService) { }

  Cancelar(): void {
    this.dialogRef.close();
  }
  guardarEmpleado(empleado: Empleado) {

    this.servicioEmp.guardarEmpleado(empleado).subscribe((x) => {
      this.dialogRef.close(x);
    });


  }

}
