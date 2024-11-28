import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatModule } from './chat/chat.module';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private cliente: HttpClient, @Inject(LOCALE_ID) private locale: string) { }
  leerMensajes(): Observable<ChatModule[]> {

    return this.cliente.get<ChatModule[]>(' http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php');
  }
  enviarMensaje(mensaje: ChatModule): Observable<ChatModule> {
    mensaje.fecha=formatDate(Date.now(),'HH:mm:ss/dd/MM/yyyy',this.locale);
    return this.cliente.post<ChatModule>(' http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php', mensaje);
  }
}
