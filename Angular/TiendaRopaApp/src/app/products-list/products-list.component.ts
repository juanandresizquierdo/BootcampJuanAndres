import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
    private router: Router,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(
      productos => {
        this.productos = productos; 
      },
      error => {
        console.error('Error al obtener productos:', error);
      }
      
    );
    console.log(this.productos);
  }

  public navegarAFicha(idProducto: number): void {
    this.router.navigate(['producto-ficha', idProducto]);
  }
}
