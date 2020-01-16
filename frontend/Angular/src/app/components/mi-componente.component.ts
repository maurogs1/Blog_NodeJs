import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html' 
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarAlgo: boolean;
    

    constructor(){
        this.titulo = "Hola, mi primer componente";
        this.comentario = "Este es mi primer comentario";
        this.year = 2020;
        this.mostrarAlgo = true;
        // console.log('componente cargado');
    }

    ocultarPelicula(){
        this.mostrarAlgo = false;
    }

}