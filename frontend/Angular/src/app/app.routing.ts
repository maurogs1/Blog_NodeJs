// importar los módulos del router de angular
// importar los componentes para darle sus propias rutas
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { NuevoArticuloComponent } from './components/nuevo-articulo/nuevo-articulo.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';




// Array de rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent    },
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/articulo/:id',component: ArticleComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'crear-articulo', component: NuevoArticuloComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'blog/editar/:id', component: ArticleEditComponent},
    {path: '**', component: ErrorComponent}

];

//exportar el módulo de rutas

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);