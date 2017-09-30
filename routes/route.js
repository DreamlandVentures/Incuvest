var express = require('express');
var route= express.Router()


route.get('/apply',function(req,res){
  res.send('hiapply');
});

route.get('/',function(req,res){
  res.send('hi');
});

route.get('/aboutus',function(req,res){
  res.send('hi1');
});

route.get('/portfolio',function(req,res){
  res.send('hi2');
});

route.get('/partners',function(req,res){
  res.send('hi3');
});

route.get('/matching',function(req,res){
  res.send('hi4');
});

module.exports=route;
