import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../../services/article.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  @Input() size: string;


  
  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit() {
    console.log(this._articleService.prueba());
  }

}
