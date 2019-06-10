import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VibradoresService {

  articulos: any[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarEquipo();
  }

  private cargarEquipo() {
    //Leer archivo JSON
    this.http.get('https://entresabanas-f684c.firebaseio.com/articulo.json')
    .subscribe( (resp: any[] )=> {
    this.articulos = resp;
    //console.log(resp);
    });

  }
}
