// Tendrá la conexión a la bd

'use strict'
var mongoose = require('mongoose');
var app= require('./app');
var port = 3900;


// Para desactivar funciones viejas (obsoletas) de mongoose
mongoose.set('useFindAndModify', false);
// Especificamos el uso de promesas con mongobd
mongoose.Promise = global.Promise;

// Conexión con mongodb
mongoose.connect('mongodb://localhost:27017/api_rest_blog',{ useNewUrlParser: true })
.then(() =>{
    console.log("Conexón exitosa...");

    // para crear el servidor y escuchar peticiones HTTP

    app.listen(port, ()=>{
        console.log("servidor corriendo en http://localhost:"+port);
    });


});