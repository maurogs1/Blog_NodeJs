// importar los módulos del router de angular
// importar los componentes para darle sus propias rutas
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ErrorComponent } from './components/error/error.component';




// Array de rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent    },
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina/:nombre/:apellido', component: PaginaComponent},
    {path: 'pagina', component: PaginaComponent},
    {path: '**', component: ErrorComponent}

];

//exportar el módulo de rutas

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);