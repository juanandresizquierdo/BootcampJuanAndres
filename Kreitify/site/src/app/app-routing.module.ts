import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Puedes agregar más rutas aquí si es necesario
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirecciona al componente de inicio de sesión por defecto
  { path: '**', redirectTo: '/login' } // Redirecciona a la página de inicio de sesión si la URL no coincide con ninguna ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
