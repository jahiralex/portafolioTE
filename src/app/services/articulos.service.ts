import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../interfaces/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  cargando = true;
  articulos: Articulo[] = [];
  articulosFiltrado: Articulo[] = [];

  constructor( private http: HttpClient ) {
    this.cargarArticulos();
  }

  private cargarArticulos() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('https://entresabanas-f684c.firebaseio.com/articulo.json')
      .subscribe( (resp: Articulo[]) => {
      this.articulos = resp;
      this.cargando = false;
      resolve();
      });
    });
  }
  
  buscarArticulosCategoria( codigoCategoria: string ) {
    if( this.articulos.length === 0 ) {
      this.cargarArticulos().then ( () => {
         this.filtrarArticulos( codigoCategoria );
      });
    } else {
     this.filtrarArticulos( codigoCategoria );
    }
  }
 
  private filtrarArticulos( codigoCategoria: string ) {
    this.articulosFiltrado = [];
    this.articulos.forEach (articulo => {
      if ( articulo.categoria === codigoCategoria ){
        this.articulosFiltrado.push(articulo);
      }
    });
  }
}
