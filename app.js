var express = require('express');
var exphbs = require('express-handlebars')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var passport = require('passport')
var exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const dotenv = require('dotenv');
dotenv.config();
 
var keys = require('./config/keys')
var PORT = process.env.PORT || 3000;

var userRoutes = require('./routes/authRoutes')

require('./models')

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

app.use(cookieParser())
app.use(session({
  secret:'secret',
  resave:false,
  saveUninitialized:false
}))

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//Global variables
app.use((req,res,next)=>{
  res.locals.user = req.user || null
  next()
})

app.use('/auth',userRoutes)

app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/deshboard',(req,res)=>{
  res.send(req.user)
})

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }
    ).then(result => {
      console.log(`Connected with database!`)
    }).catch(err => {
      console.log(err);
  })


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})