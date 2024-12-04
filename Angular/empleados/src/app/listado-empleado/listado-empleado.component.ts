import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
  styleUrls: ['./listado-empleado.component.css']
})
export class ListadoEmpleadoComponent implements OnInit{
editarEmpleado(_t99: any) {
}
eliminarEmpleado(_t86: any) {
}

  columnas: string[] = ['id', 'nombre', 'cargo', 'edad', 'imagen','eliminar','editar'];
  datos: ListadoEmpleadoComponent[] = [
  ];
  empleado:ListadoEmpleadoComponent=[
    {
      id: 0,
      nombre: '',
      direccion: '',
      cargo: '',
      edad: 0,
      imagen: '',
      eliminar: '',
      editar: '',

    }
  ];

  dataSource!: MatTableDataSource<ListadoEmpleadoComponent>;
  constructor(private httpCliente: ServicioEmpleadoService){ }
  ngOnInit() {
    this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data=x;this.datos=x})

  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
applyFilter($event: KeyboardEvent) {
}

}
