var express = require('express');
var handlebars= require('express-handlebars');
var app=express();
var path = require('path');
var mongoose = require('mongoose');



app.engine('hbs', handlebars({
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  defaultLayout: 'main.hbs',
  extname: 'hbs'
}));



app
  .set('view engine', 'hbs')
  .set('views', path.join(__dirname, 'views'));



app.get('/',function(req,res){
  res.render('index');
});


const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
