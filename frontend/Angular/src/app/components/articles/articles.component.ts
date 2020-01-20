import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Array<Article>;
  
  public url: string;



  constructor() { 

    this.url = "http://localhost:3900/curso/";
  }


  ngOnInit() {
    console.log(this.articles);
  }

  obtenerImagen(){

  }
}
