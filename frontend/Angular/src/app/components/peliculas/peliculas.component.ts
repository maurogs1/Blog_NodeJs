import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit{

  public pelicula: Pelicula;
  public titulo: string;
  public peliculas: Array<Pelicula>;
  public peliFavorita: Pelicula;
  public fecha: any;
 
  constructor(
    private _peliculaService: PeliculaService
  ) { 
    this.titulo = "hola soy el titulo";
    this.fecha = new Date(2020,8,12);
    this.peliculas = this._peliculaService.getPeliculas();
  }

  ngOnInit() {

    console.log(this._peliculaService.holaMundo());
  }

  marcarFavorita(event){
    this.peliFavorita = event.pelicula;
  }
 

}
