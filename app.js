var express = require('express');
var handlebars= require('express-handlebars');
var app=express();
var path = require('path');
var mongoose = require('mongoose');
var login = require('./routes/route');
var options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};

var Schema = mongoose.Schema;
mongoose.connect('mongodb://root:venture@ds147454.mlab.com:47454/wuepabase', options);

var conn = mongoose.connection;



app.engine('hbs', handlebars({
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  defaultLayout: 'main.hbs',
  extname: 'hbs'
}));


app.use(express.static(path.join(__dirname, 'public')));

app
  .set('view engine', 'hbs')
  .set('views', path.join(__dirname, 'views'));

app.get('/profile',function(req,res){
  res.render('profile',{layout:'inside.hbs'});
});

app.get('/',function(req,res){
  res.render('index');
});


const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
