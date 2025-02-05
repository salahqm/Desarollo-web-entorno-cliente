import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class ServicioLocalService {

  constructor(private HttpClient: HttpClient) { }

  logeo(usuario: Usuario):Observable <Usuario> {
    return this.HttpClient.get<Usuario>
    ('http://localhost/ServiciosChat/logeo.php?email='+usuario.email+'&pwd='+usuario.pwd
    )
  }
  listadoUsuarios():Observable<Usuario[]>{
    return this.HttpClient.get<Usuario[]>
    ('http://localhost/ServiciosChat/listadoUsuarios.php'
    )
  }
  listadoDeMensajes():Observable<Mensaje[]>{
    return this.HttpClient.get<Mensaje[]>
    ('http://localhost/ServiciosChat/listadoMensajes.php'
    )
  }
  escribirMensaje(mensaje:Mensaje):Observable<Mensaje>{
    return this.HttpClient.post<Mensaje>('http://localhost/ServiciosChat/insertarMensaje.php',mensaje)
  }
  leerMensajesP(parametero :String):Observable<Mensaje[]>{
    return this.HttpClient.get<Mensaje[]>('http://localhost/ServiciosChat/leerMensajesP.php?usuario='+parametero)
    }

}
