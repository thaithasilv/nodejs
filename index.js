const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem-vinda!");
});

app.get("/sobre", function(req, res){
    res.send("Sou estudante!");
});

app.get("/blog", function(req, res){
    res.send("github thaithasilv");
});

app.listen(8087, function(){
    console.log("Servidor ON");
});