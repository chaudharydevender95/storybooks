var express = require('express');
var exphbs = require('express-handlebars')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var passport = require('passport')
var exphbs = require('express-handlebars')

var PORT = process.env.PORT || 3000;

var userRoutes = require('./routes/authRoutes')

//passport config
require('./config/passport')(passport)

var app = express();

app.engine('handlebars', exphbs({
    defaultLayout:'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//method override middleware
app.use(methodOverride('_method'))

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth',userRoutes)

app.get('/',(req,res)=>{
    console.log(req.user)
    res.render("index")
})

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})