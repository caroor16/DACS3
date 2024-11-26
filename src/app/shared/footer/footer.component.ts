import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  noInicio: boolean = true;  // Variable para verificar si está en el login /*

  constructor(private router: Router) {  // Usa Router para la navegación
    // Verifica si la ruta actual es la de login
      this.router.events.subscribe(() => {
        this.noInicio = this.router.url !== '/login';
    });
 }
}
