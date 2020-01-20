import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-nuevo-articulo',
  templateUrl: './nuevo-articulo.component.html',
  styleUrls: ['./nuevo-articulo.component.css'],
  providers: [ArticleService]
})
export class NuevoArticuloComponent implements OnInit {
  
  public article: Article;
  public status: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:Global.url+'upload/image/',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imágen',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    },
};


  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', '', '', null, null);
  }

  ngOnInit() {
  }
  onSubmit() {
    this._articleService.create(this.article).subscribe(response => {
      if (response.status == 'success') {
        this.status = response.status;
        this.article = response.article;
        alert("Artículo creado correctamente!")
        this._router.navigate(['/blog']);
      }
    }, error => {
      this.status = 'error';
    });
  }

  subirImagen(event){
    let image_data = JSON.parse(event.response);
    this.article.image = image_data.image;
  }
}
