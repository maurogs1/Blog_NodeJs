import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingProviders, routing} from './app.routing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { EsParPipe } from './pipes/espar.pipe';
import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from './components/articles/articles.component';
import { MomentModule } from 'angular2-moment';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { NuevoArticuloComponent } from './components/nuevo-articulo/nuevo-articulo.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

@NgModule({
  //Acá se pone el nombre de la clase con la que exporto
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent,
    PruebasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    ErrorComponent,
    PeliculaComponent,
    EsParPipe,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    NuevoArticuloComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFileUploaderModule,
    FormsModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
