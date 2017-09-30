var express = require('express');
var handlebars= require('express-handlebars');
var app=express();
var path = require('path');


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

app.get('/apply',function(req,res){
  res.send('hiapply');
});

app.get('/',function(req,res){
  res.send('hi');
});

app.get('/aboutus',function(req,res){
  res.send('hi1');
});

app.get('/portfolio',function(req,res){
  res.send('hi2');
});

app.get('/partners',function(req,res){
  res.send('hi3');
});

app.get('/matching',function(req,res){
  res.send('hi4');
});


const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
