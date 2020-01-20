'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');
var Article = require('../models/article');

var controller = {
    datosCuros: (req, res) => {
        return res.status(200).send({
            curso: "Master en Frameworks",
            autor: "Mauro Saravia",
            url: "maurogs.com.ar"
        });


    },
    test: (req, res) => {
        return res.status(200).send({
            message: "Soy el método test de mi controlador"
        });
    },
    save: (req, res) => {
        //primero agarro los parámetros por post
        var params = req.body;


        //valido los datos con la libreria validator
        try {

            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);


        } catch (err) {

            return res.status(200).send({
                status: 'error',

                message: "Faltan datos por enviar"
            });
        }
        if (validate_title && validate_content) {


            //Creo el objeto a guardar
            var article = new Article();
            
            //le asigno los valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            //guardo el artìculo en la bd

            article.save((err, articleStored) => {
                if (err || !articleStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: "El artículo no ha sido guardado"
                    });
                }
                //devuelvo una respuesta http
                return res.status(200).send({
                    status: 'success',
                    article: articleStored
                });

            });

        } else {
            return res.status(200).send({
                status: 'error',
                message: "Los datos no son válidos"
            });
        }
    },


    getArticles: (req, res) => {


        var query = Article.find({});
        var last= req.params.last;


        if(last || last != undefined){
            query.limit(5 );
        }

        //busco todos los articulos de la bd
        query.sort('-_id').exec((err, articles)=>{

            if(err || !articles){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devoolver los artículos'
                });
            }
            return res.status(200).send({
                status: "ok",
            articles
            });

        });



    },

    /**
     * Método para buscar 1 único artículo por id
     */
    getArticle: (req, res) => {
        //
        var articleId = req.params.id;

        if(!articleId || articleId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el artículo'
            });    
        }
        Article.findById(articleId, (err, article) => {
            if(err){        
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los datos'
                });    
        
            }
            if(!article){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el artículo'
                });    
        
            }

            return res.status(200).send({
                status: 'success',
                article
            });    



        });
    },

    update: (req, res) =>{
        //recoger el id del artículo por la url

        var articleId =  req.params.id;

        var params = req.body;


        


        //validar datos
        try{
            var validateTitle = !validator.isEmpty(params.title);
            var validateContent = !validator.isEmpty(params.content);


            if(validateTitle || validateContent){
                //Busco el registro, primer parámetro es el id, segundo son los nuevos datos que mandaron por el body
                // el tercer hace que devuelva el nuevo artículo y no el anterior, y al último un callback, que es un error o un update 
                Article.findByIdAndUpdate({_id: articleId}, params, {new:true}, (err, articleUpdate)=> {
                    if(err){
                        return res.status(500).send({
                            status: 'error',
                            message: 'Error al actualizar'
                        });             
                    }
                    if(!articleUpdate){
                        return res.status(404).send({
                            status: 'error',
                            message: 'No existe el artículo para actualizar'
                        });             
                    }
                    
                    return res.status(200).send({
                        status:'success',
                       article:  articleUpdate
                    });

                });

            }else{
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos por enviar'
                });     
            }

        }catch(err){
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });    
        }
    },

    delete: (req, res) => {
        //Obtener el id de la url
        var articleId = req.params.id;

        // buscar y borrar por ese id
        Article.findByIdAndDelete({_id: articleId}, (err, articleRemoved)=>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar'
                });
            }

            if(!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el artículo, probablemente no exista'
                });
            }
            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });



        });

    },

    upload: (req, res)=> {



        
        //Configurar el módulo connect multiparty router/article.js
        console.log(req.files);
        //recoger el fichero de la petición 
        var file_name = 'Imagen no subida';
        if(!req.files){
            return res.status(404).send({
                status:'error',
                message: req.files
            });
        }

        //nombre del archivos
    
        var file_path = req.files.file0.path;            
        var file_split = file_path.split('\\');

        // la extención del archivo
        var file_namee = file_split[2];
        var extension_split = file_namee.split('\.');
        var file_ext = extension_split[1];

        //comprobar la extensión del archivo (sólo imágenes), si no lo son, borrarla
        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif' ){
            
            fs.unlink(file_path, (err)=>{
                return res.status(200).send({
                    status: 'error',
                    message: ' La extensión de la imágen no es válidad'
                });
            });
            //Borrar el archivo subido para que no se quede en la carpeta 
        }else{
            //id de la url
            var articleId = req.params.id;
         Article.findOneAndUpdate({ _id: articleId}, {image: file_namee}, {new: true}, (err, articleUpdated) =>{
            if(err || !articleUpdated){
                return res.status(400).send({
                    status: 'error',
                    message: 'Error al guardar la imágen'
                });
            }


            return res.status(200).send({            
                status: 'success',
                article: articleUpdated
            });
    

         });
            
                }
    },


    getImage: (req, res)=>{
        var file = req.params.image;
        var path_file ='./upload/articles/'+file;

        fs.exists(path_file, (exists)=>{
            if(exists){
                return  res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    status:'error',
                    message: 'la imagen no existe'
                });
            }
        });

    },

    search: (req, res)=>{
        //sacar el string a buscar
        var searchString = req.params.search;


        //después un find or
        Article.find({ "$or":[
            { "title": { "$regex": searchString, "$options": "i"}},
            { "content": { "$regex": searchString, "$options": "i"}}

        ]})
        .sort([['date', 'descending']]).exec((err, articles)=>{
            if(err){
                return res.status(404).send({
                    status: 'error',
                    message: 'error en la bd'
                });
            }
            if(!articles || articles.length <= 0){
                return res.status(400).send({
                    status: 'error',
                    message: 'no hay articulos con tu busqueda'
                });
            }


            return res.status(200).send({
                status: 'success',
                articles
            });

        })        
        ;
    }




};// final del controlador

module.exports = controller;
