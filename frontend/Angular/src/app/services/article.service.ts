import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Global } from './global';


@Injectable()
export class ArticleService {
    public url: string;
    public url2: string;
    public articles: string;
    
    constructor(private _http: HttpClient)
    {this.url = Global.url;
    this.url2 = "http://localhost:3900/curso/"}

    getArticles(last: any = null):Observable<any>{

        this.articles = "articles";
        if(last != null){
            this.articles = "articles/true"        
        }
        return this._http.get(this.url+this.articles);
    }

    getArticle(articleId):Observable<any>{
        return this._http.get(this.url+'article/'+articleId);
    }

    search(searchString):Observable<any>{
        console.log("se muestra: "+searchString);
                return this._http.get(this.url+'search/'+searchString);
    }

    create(article):Observable<any>{
        //Convierto el objeto javascript en un JSON para usarlo como parámetro en la petición hhtp

        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'save',params,{headers: headers});
    }

    update(id, article):Observable<any>{
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'article/'+id,params,{headers: headers});
    }

    delete(id):Observable<any>{
        console.log(this.url+'article/'+id);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'article/'+id,{headers: headers});
    }


}