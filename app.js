var express = require('express');
var handlebars= require('express-handlebars');
var app=express();
var path = require('path');
var mongoose = require('mongoose');
var login = require('./routes/route');

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
app.get('/kidmoto',function(req,res){
  res.render('kidmoto');
});
app.get('/pinatafc',function(req,res){
  res.render('pinata');
});
app.get('/profile/kidmoto',function(req,res){
  res.render('kidmoto',{layout:'inside.hbs'});
});
app.get('/profile/pinatafc',function(req,res){
  res.render('pinata',{layout:'inside.hbs'});
});


const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
