const express = require('express')
const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');
const hbs = require('hbs');
const path = require("path");
const exphbs = require("express-handlebars");

const app = express()




const db ='mongodb+srv://hackathon:online@cluster0.wkx7c.mongodb.net/User?retryWrites=true&w=majority'




mongoose
.connect(
  
  db,
  {  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
     useCreateIndex: true
  }

)
.then(() => console.log('MongoDB Connected....'))
.catch(err => console.log(err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('views',path.join( __dirname, "views"));
app.set('view engine', '.hbs');





app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use('/user', require('./routes/user'));


app.get("/", function(req, res) {
  res.end("welcome");
})
app.get("/login", function(req, res) {
  res.render("login");
})



app.listen(5000, () => {
    console.log('Server listening at port 5000')
})