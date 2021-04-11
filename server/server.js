//jshint esversion:6
const express = require("express");
const app = express();
app.get("/", function(req, res){
  console.log(req);
  res.send("<h1>L</h1>");
});
app.get("/a", function(req, res){
  console.log(req);
  res.send("<h1>f</h1>");
});
app.listen (5000, function(){
  console.log("asdf");
});
