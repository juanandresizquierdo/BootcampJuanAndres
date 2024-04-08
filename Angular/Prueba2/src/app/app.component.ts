import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba2';

  private router: Router;

  constructor(router: Router){
    this.router = router;
  }

  navegarAHome(){
    this.router.navigate(['']);
  }

  navegarAAcercaDe(){
    this.router.navigate(['acerca']);
  }

}
