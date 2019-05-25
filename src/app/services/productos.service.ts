import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarProductos();
  }

  private cargarProductos() {
    //Leer archivo JSON
    this.http.get('https://entresabanas-f684c.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto[]) => {
    console.log(resp);
    this.productos = resp;
    this.cargando = false;

    setTimeout(() =>  {
      this.cargando = false;
    }, 2000);
    });
 }
}
