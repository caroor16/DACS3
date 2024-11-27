import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Agregar una clase 'login-page' al body cuando el componente se cargue
    document.body.classList.add('login-page');
  }

  ngOnDestroy() {
    // Eliminar la clase cuando el componente se destruya, si es necesario
    document.body.classList.remove('login-page');
  }
<<<<<<< HEAD

  entrar() {
    // lógica de validación del usuario 
    // Redirige a la ruta '/categoria' después de la validación
    this.router.navigate(['/categoria']);
  }
=======
>>>>>>> 1b63b214657c06aed23da781888fbc453458f8d3
}