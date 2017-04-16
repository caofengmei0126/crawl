let express = require('express');
let app = express();
let Movie = require('./model').Movie;
let path = require('path');
app.use(express.static(path.resolve('public')));
app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.get('/',function (req,res) {
    Movie.find({},function (err,movies) {
        res.render('index',{movies})
    })
});
app.listen(8080);

