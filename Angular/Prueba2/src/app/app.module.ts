import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ArticuloListComponent } from './articulo/articulo-list/articulo-list.component';
import { ArticuloFormComponent } from './articulo/articulo-form/articulo-form.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { PrecioEurosPipe } from './precio-euros.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcercadeComponent,
    NavbarComponent,
    FooterComponent,
    ArticuloListComponent,
    ArticuloFormComponent,
    DirectivasComponent,
    PrecioEurosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
