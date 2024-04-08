import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

  elementos: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.elementos = this.obtenerElementos();
  }

  private obtenerElementos(): string[] {
    const elementosADevolver: string[] = ['Elemento 01', 'Elemento 02', 'Elemento 03', 'Elemento 04'];
    return elementosADevolver;
  }

}
