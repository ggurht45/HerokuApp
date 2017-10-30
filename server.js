var express = require("express");
var app = express();

//set the port number
var port = process.env.port || 8080 //either heroko sets the port, or we do it.

//tell app to use current directory for finding static files. also allow the files to run.
//__dirname evaluates to the current folder name
app.use(express.static(__dirname));


//set up a route; and the handling function that should execute when that request is called.
app.get("/", function(req, res){
  res.render("index");
}) //<----no semicolon?

//actively listen for requests being made to this server. 
app.listen(port, function(){
  console.log("app running on port: " + port);
})