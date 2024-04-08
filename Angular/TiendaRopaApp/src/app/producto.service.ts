import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  constructor(
    private http: HttpClient
  ) {
    /*
    this.productos = [
      new Producto(1, "Traje de Vestir Clásico", 199.99, "Traje de vestir clásico para ocasiones formales.", "assets/img/traje.jpg"),
      new Producto(2, "Camisa Formal Blanca", 49.99, "Camisa formal blanca de algodón.", "assets/img/camisa.jpg"),
      new Producto(3, "Pantalones de Traje Slim Fit", 79.99, "Pantalones de traje slim fit para hombres.", "assets/img/pantalones.jpg"),
      new Producto(4, "Chaqueta Formal Negra", 129.99, "Chaqueta formal negra elegante para hombres.", "assets/img/chaqueta.jpg"),
      new Producto(5, "Corbata de Seda", 29.99, "Corbata de seda elegante para ocasiones especiales.", "assets/img/corbata.jpg"),
      new Producto(6, "Zapatos de Vestir", 99.99, "Zapatos de vestir de cuero para hombres.", "assets/img/zapatos.jpg")
    ];
    */
  }

  public obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>('http://localhost:3000/productos/' + id);
  }
  

  public obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>('http://localhost:3000/productos');
  }
  
}
