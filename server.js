var express = require("express");
var app = express();


//either heroko sets the port, or we do it.
var port = (process.env.PORT || 5000)
app.set('port', port);

//tell app to use current directory for finding static files. also allow the files to run.
//__dirname evaluates to the current folder name
app.use(express.static(__dirname));


//set up a route; and the handling function that should execute when that request is called.
app.get("/", function(req, res){
  res.render("index");
}) //<----no semicolon?

//actively listen for requests being made to this server.
app.listen(app.get('port'), function(){
  console.log("app running on port: " + port);
})
