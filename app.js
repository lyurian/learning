var express = require("express")  
var hbs = require("express-handlebars")

var app = express()

app.use(express.static("public"))

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get("/",function(req,res){
	res.render('home');
});
app.get("/world",function(req,res){
	res.send("<h1>world</h1>")
});

app.get("/about",function(req,res){
	res.render('about');
});

app.listen(3000)


