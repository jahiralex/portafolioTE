import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  cargando = true;
  categorias: Categoria[] = [];
  categoriaFiltrado: Categoria[] = [];

  constructor( private http: HttpClient ) {
    this.cargarCategorias();
  }

  private cargarCategorias() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('https://entresabanas-f684c.firebaseio.com/categorias.json')
      .subscribe( (resp: Categoria[]) => {
      this.categorias = resp;
      this.cargando = false;
      resolve();
      });
    });
 }
}
