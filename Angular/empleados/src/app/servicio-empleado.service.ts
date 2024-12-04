import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoEmpleadoComponent } from './listado-empleado/listado-empleado.component';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {
  constructor(private cliente: HttpClient) { }
  leerEmpleados(): Observable<ListadoEmpleadoComponent[]> {
    return this.cliente.get<ListadoEmpleadoComponent[]>('http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php');
  }
}
