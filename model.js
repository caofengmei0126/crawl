 let mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:027017/201615crawl');
let MovieSchema = new mongoose.Schema({
    name:String,
    url:String
});
 module.exports.Movie = mongoose.model('Movie',MovieSchema);
