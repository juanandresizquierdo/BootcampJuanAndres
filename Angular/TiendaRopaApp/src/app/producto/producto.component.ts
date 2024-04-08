import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from './producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  producto: Producto | undefined;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) { }
  
  idProducto?: string;

  ngOnInit(): void {
    this.idProducto = this.route.snapshot.paramMap.get('idProducto') ?? undefined;
    if (this.idProducto) {
      this.productoService.obtenerProductos().subscribe(
        productos => {
          this.producto = productos.find(producto => producto.id.toString() === this.idProducto) ?? undefined;
        },
        error => {
          console.error('Error al obtener productos:', error);
        }
      );
    }
  }
}
