'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

var multipar = require('connect-multiparty');
var md_upload = multipar({ uploadDir: './upload/articles' });
var md_ruta = multipar({ uploadDir: './upload/imagenes' });
//Rutas de pruebas
router.get('/test-de-controlador', ArticleController.test);
router.post('/datos-cursp', ArticleController.datosCuros);


// Rutas para los artículos
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.update);
router.post('/upload/image/:id', md_ruta, ArticleController.upload);
router.get('/get-image/:image', ArticleController.getImage);
router.get('/search/:search', ArticleController.search);

module.exports = router;