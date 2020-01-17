import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{
    public peliculas: Pelicula[];

    constructor(){
        this.peliculas =  [
            new Pelicula("Spiderman", 2019, "../../../assets/images/spiderman.jpg"),
            new Pelicula("Superman", 2919, "../../../assets/images/superman.jpg"),
            new Pelicula("No sé",2010,"../../../assets/images/maxresdefault.jpg"),
        ];
    }
    holaMundo(){
        return  {
            nombre: 'jajajja',
            wawa: "wewew"
        }
    }
    getPeliculas(){
        return this.peliculas;
}



}