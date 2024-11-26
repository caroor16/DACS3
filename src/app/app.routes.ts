import { Routes } from '@angular/router';
import { FavoritoComponent } from './pages/favorito/favorito.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { PreferenciaComponent } from './pages/preferencia/preferencia.component';
import { recetasDeComponent } from './pages/recetasDe/recetasDe.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component'; 
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ErroresComponent } from './pages/errores/errores.component';
import { RouterModule } from '@angular/router';  // Importa RouterModule


export const routes: Routes = [
    {path:'categoria', component:CategoriaComponent},
    {path:'favorito', component:FavoritoComponent},
    {path:'preferencia', component:PreferenciaComponent},
    {path:'recetasDe', component: recetasDeComponent},
    { path: 'busqueda', component: BusquedaComponent },
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'errores', component: ErroresComponent},
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

