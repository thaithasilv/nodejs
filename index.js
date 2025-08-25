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

app.get("/ola/:nome/:curso", function(req, res){
    res.send("<h1>Oiee "+req.params.nome+"</h1>");
});

app.listen(8087, function(){
    console.log("Servidor ON");
});