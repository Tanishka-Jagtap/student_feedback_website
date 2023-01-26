const express = require("express");
const App = express();

App.use(express.static("public"));

App.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

App.get("/", function(req, res){
  res.sendFile(__dirname + "/styles.css");
});

App.listen(3000, function () {
  console.log("The server has started on port 3000");
});
