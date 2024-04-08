import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ArticuloListComponent } from './articulo/articulo-list/articulo-list.component';
import { ArticuloFormComponent } from './articulo/articulo-form/articulo-form.component';
import { DirectivasComponent } from './directivas/directivas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'acerca', component: AcercadeComponent},
  {path: 'articulos', component: ArticuloListComponent},
  {path: 'articulo-ficha/:idArticulo', component: ArticuloFormComponent},
  {path: 'directivas', component: DirectivasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
