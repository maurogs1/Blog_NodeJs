// Acá se crea express, peticiones etc


'use strict';

//Cargamos módulos de node para crear el servidor

//Cargar el modulo de express
var express = require('express');

//Cargar el modulo body-parser (para recibir peticiones y convertirlo a un json o bson)
var bodyParser = require('body-parser');



// Ejecutar express(http)
//es la aplicación
var app = express();

//Cargar ficheros/rutas
var article_routes = require('./routes/article');
// cargar middelware (esto se ejecuta antes de cargar las rutas)

//esto es para cargar el bodyparser
app.use(bodyParser.urlencoded({extended: false}));
//esto convierte cualquier tipo de petición a un json
app.use(bodyParser.json());

// Acá se activa el CORS (para peticiones desde el frontend) para permitir el acceso o llamadas http o llamadas ajax a la api
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();

});

//Añadir prefijos a rutas / cargar rutas

app.use('/curso', article_routes); //línea para sobrescribir (no es obligatorio pero queda mejor) el empiezo de las rutas, y la segunda parte 'article_routes' es para cargar las rutas de la carperta routes que hice


//Exportar módulos (fichero actual)
module.exports = app;
