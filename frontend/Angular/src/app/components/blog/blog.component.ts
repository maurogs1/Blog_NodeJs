import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles:  Array<Article>;
  public url: string;

  @Input() size: string;


  
  constructor(
    private _articleService: ArticleService
    
  ) {this.url = Global.url; }

  ngOnInit() {
    this._articleService.getArticles().subscribe(
      response => {

          if(response.articles){
            console.log("Artículos cargados correctamente...");
          
            this.articles = response.articles;
          }
       
      },
      error => {
        console.log(error);
      }
    );
  }

}
