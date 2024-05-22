import { Component, OnInit } from '@angular/core';


import { Dropdown, Collapse, initMDB } from 'mdb-ui-kit';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    initMDB({ Dropdown, Collapse });
  }

  search(query: string): void {
    // Aquí puedes añadir la lógica para realizar la búsqueda
    console.log('Buscando:', query);
  }
}
