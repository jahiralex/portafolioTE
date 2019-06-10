import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { VibradoresComponent } from './pages/vibradores/vibradores.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';

const app_routes: Routes = [
  { path: 'home', component: CategoriasComponent },
  //{ path: 'home', component: PortafolioComponent },
  //{ path: 'categorias', component: CategoriasComponent },
  { path: 'articulos/:codigoCategoria', component: ArticulosComponent },
  //{ path: 'vibradores', component: VibradoresComponent },
  //{ path: 'about', component: AboutComponent },
  //{ path: 'item/:id', component: ItemComponent },
  //{ path: 'search/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
