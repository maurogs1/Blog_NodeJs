import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-article-edit',
  templateUrl: '../nuevo-articulo/nuevo-articulo.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {
  public article: Article;
  public status: string;
  public isEdit: boolean;
  public titulo: string;
  public url: string;


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
    this.isEdit = true;
    this.titulo = "Editar artículo"
    this.url = "http://localhost:3900/curso/";
  }

  ngOnInit() {
    this.getArticle();
    
  }
  onSubmit() {
    this._articleService.update(this.article._id,this.article).subscribe(response => {
      if (response.status == 'success') {
        this.status = response.status;
        this.article = response.article;
      swal(
           'Artículo creado', 'El artículo se ha editado correctamente', 'success'
         );
        this._router.navigate(['/blog/articulo/', this.article._id]);
      }
    }, error => {
      this.status = 'error';
      swal(
        'Edición fallida', 'El artículo no se puede editar', 'error'
      );
    });
  }

  subirImagen(event){
    let image_data = JSON.parse(event.response);
    this.article.image = image_data.image;
  }

  getArticle(){
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
