import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Agregar una clase 'login-page' al body cuando el componente se cargue
    document.body.classList.add('login-page');
  }

  ngOnDestroy() {
    // Eliminar la clase cuando el componente se destruya, si es necesario
    document.body.classList.remove('login-page');
  }

  entrar() {
    this.router.navigate(['/categoria']);
  }

  login() {
    this.router.navigate(['/login']);
  }

}

