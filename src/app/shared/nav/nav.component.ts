import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  searchQuery: string = '';  // Propiedad para almacenar el valor del input
  menuVisible: boolean = false;  // Controla la visibilidad del menú desplegable
  noInicio: boolean = true;  // Variable para verificar si está en el login /*

  constructor(private router: Router) {  // Usa Router para la navegación
  // Verifica si la ruta actual es la de login
    this.router.events.subscribe(() => {
      this.noInicio = this.router.url !== '/login';
    });
  }
  
  // Captura el valor del input de búsqueda y lo guarda en searchQuery
  onSearchInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;
  }

  buscar(): void {
    if (this.searchQuery.trim()) {
      const savedPreferences = JSON.parse(localStorage.getItem('preferencias') || '{}');
      const dietas = savedPreferences.dietas || [];
      const intolerancias = savedPreferences.intolerancias || [];

      this.router.navigate(['/recetasDe'], { queryParams: { categoria: this.searchQuery, dietas: JSON.stringify(dietas), intolerancias: JSON.stringify(intolerancias) } });
      this.searchQuery = '';
    } else {
      console.log('Por favor ingresa un término de búsqueda');
    }
  }


  // Alterna la visibilidad del menú desplegable
  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  // Función para manejar la acción de "Cerrar sesión"
  cerrarSesion(): void {
    console.log('Cerrando sesión...');
    //  lógica  para cerrar la sesión, por ejemplo:
    // this.authService.logout();  // sirve para servicios de autenticación

    // Después de cerrar sesión, redirigir a la página principal 
    this.router.navigate(['/login']);  // Redirige a la página de login 

    // Cierra el menú
    this.menuVisible = false;
  }
}


