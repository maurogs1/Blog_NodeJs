import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Global } from '../../services/global';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[ArticleService]
})
export class ArticleComponent implements OnInit {
  
  public article: Article;
  public url: String;
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
    

    ) { 
      this.url ="http://localhost:3900/curso/";
      }

  ngOnInit() { 
   
    
    this._route.params.subscribe(
      data => {
        let id = data['id'];
          this._articleService.getArticle(id).subscribe(
            response => {
              if(response.article){
                this.article = response.article;                
              }else{
                this._router.navigate(['/home']);
              }

              console.log(response);
            },
            error => {
              this._router.navigate(['/home']);
              console.log(error);
            }
          )

      });

    

  }

}
