import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit{

  public pelicula: Pelicula;
  public titulo: string;
  public peliculas: Array<Pelicula>;
  public peliFavorita: Pelicula;

 
  constructor() { 
    this.titulo = "hola soy el titulo";
    
    

    this.peliculas = [
        new Pelicula("Spiderman", 2019, "../../../assets/images/spiderman.jpg"),
        new Pelicula("Superman", 2919, "../../../assets/images/superman.jpg"),
        new Pelicula("No sé",2010,"../../../assets/images/maxresdefault.jpg"),
    ];
  }

  ngOnInit() {
    console.log("ng oninit lanzado...");
  }

  marcarFavorita(event){
    this.peliFavorita = event.pelicula;
  }
 

}
