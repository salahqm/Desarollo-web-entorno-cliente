import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from '../empleado';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ServicioEmpService } from '../servicio-emp.service';
import { CuadroDialogoEmpleadoComponent } from '../cuadro-dialogo-empleado/cuadro-dialogo-empleado.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogoModificarComponent } from '../dialogo-modificar/dialogo-modificar.component';
@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
  styleUrls: ['./listado-empleado.component.css']
})
export class ListadoEmpleadoComponent implements OnInit {




  eliminarEmpleado(id: number) {
    this.httpCliente.eliminar(id).subscribe((empleado: Empleado
    ) => {
      this.httpCliente.leerEmpleados().subscribe((x) => {
        this.dataSource.data = x;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }
  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
  columnas: string[] = ['id', 'nombre', 'direccion', 'cargo', 'edad', 'imagen', 'eliminar', 'modificar'];
  datos: Empleado[] = [];
  dataSource: MatTableDataSource<Empleado> = new MatTableDataSource();

  empleado!: Empleado;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private httpCliente: ServicioEmpService, public dialog: MatDialog) {

  }
  modificarEmpleado(emp: Empleado) {
    // Abrir el diálogo y pasar los datos del empleado
    const dialogoMod = this.dialog.open(DialogoModificarComponent, {
      width: '300px',
      height: '600px',

      data: { 
        id: emp.id,
        nombre: emp.nombre,
        direccion: emp.direccion,
        cargo: emp.cargo,
        edad: emp.edad,
        imagen: emp.imagen
      }

    });
    // Esperar a que el diálogo se cierre y procesar los datos si se modificaron
    dialogoMod.afterClosed().subscribe(x => {
      if (x != undefined) {

        this.httpCliente.modificarEmpleado(x).subscribe(resultado => {

          const index = this.datos.findIndex(e => e.id === x.id);
          if (index !== -1) {
            this.datos[index] = x;
            this.dataSource.data = [...this.datos];
          }
        });
      }
    });
  }

  openDialog() {
    this.dialog.open(CuadroDialogoEmpleadoComponent, {
      width: '300px',
      height: '600px',

    });

  }
  ngOnInit(): void {
    this.httpCliente.leerEmpleados().subscribe((x) => {
      this.dataSource.data = x;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
