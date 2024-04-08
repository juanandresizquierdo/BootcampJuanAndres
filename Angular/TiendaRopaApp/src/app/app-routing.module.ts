import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  { path: '', component: TiendaComponent },
  { path: 'lista-articulos', component: ProductsListComponent },
  { path: 'producto-ficha/:idProducto', component: ProductoComponent },
  { path: 'historia', loadChildren: () => import('./historia/historia.module').then(m => m.HistoriaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
