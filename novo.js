let http = require('http');
http.createServer(function(req,res){
    res.end("Oieee");
}).listen(8087);
console.log("Servidor rodando");