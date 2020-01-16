'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = Schema({
    title: String,
    content: String,
    date: {type: Date, default: Date.now},
    image: String
});



module.exports = mongoose.model('Article', ArticleSchema);

// mongodb a Article le va a cambiar a plural y minúsculas; se llamará 'arcicles'


