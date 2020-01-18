import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public titulo: string;
  public articles: Array<Article>;

  constructor(private _articleService: ArticleService) { 
    this.titulo = "Últimos artículos"
  }

  ngOnInit() {
           
      this._articleService.getArticles(true).subscribe(
        response => {
  
            if(response.articles){
              console.log("Artículos cargados correctamente...");
                console.log(response);
              this.articles = response.articles;
            }
         
        },
        error => {
          console.log("Ocurrió un error");
          console.log(error);
        }
      );
    }
  }


