var express = require('express');
var exphbs = require('express-handlebars')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//method override middleware
app.use(methodOverride('_method'))

app.get('/',(req,res)=>{
    res.send("It works!")
})

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})