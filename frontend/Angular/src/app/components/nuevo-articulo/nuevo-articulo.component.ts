import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../../services/global';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-nuevo-articulo',
  templateUrl: './nuevo-articulo.component.html',
  styleUrls: ['./nuevo-articulo.component.css'],
  providers: [ArticleService]
})
export class NuevoArticuloComponent implements OnInit {
  
  public article: Article;
  public status: string;
  public titulo: string;
  public url: string;
  public isEdit: boolean = false;




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
    this.titulo = "Crear artículo"
    this.url = "http://localhost:3900/curso/";
    }

  ngOnInit() {
  }
  onSubmit() {
    this.crearArticulo();
  }

  subirImagen(event){
    let image_data = JSON.parse(event.response);
    this.article.image = image_data.image;
  }

  crearArticulo(){
    this._articleService.create(this.article).subscribe(response => {
      if (response.status == 'success') {
        this.status = response.status;
        this.article = response.article;        
        swal(
          'Artículo creado', 'El artículo se ha creado correctamente', 'success'
        )
        this._router.navigate(['/blog']);
      }
    }, error => {
      this.status = 'error';
    });
  }

}
