import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo: string;

  constructor() { 
    this.user = {
      nombre: '',
      apellido: '',
      biografia: '',
      genero: ''
    }
  }

  ngOnInit() {
  }
  onSubmit(){
    alert("formulario enviado")
    console.log(this.user);
  }

  hacerClick(){
    console.log("wawa");
  }

  salir(){
    console.log("salir");
  }
}
