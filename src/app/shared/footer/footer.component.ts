import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 1b63b214657c06aed23da781888fbc453458f8d3

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
<<<<<<< HEAD
  noInicio: boolean = true;  // Variable para verificar si está en el login /*

  constructor(private router: Router) {  // Usa Router para la navegación
    // Verifica si la ruta actual es la de login
      this.router.events.subscribe(() => {
        this.noInicio = this.router.url !== '/login';
    });
 }
=======

>>>>>>> 1b63b214657c06aed23da781888fbc453458f8d3
}
