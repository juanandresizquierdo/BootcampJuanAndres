import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin(): void {
    // Aquí iría la lógica de autenticación
    // Si la autenticación es exitosa, redirigir al Home
    this.router.navigate(['/home']);
  }
}
