const express = require("express");
const servidor = express();

servidor.get("/", function(req, res){
    res.send("Bem vindo(a) aplicação!!!");
});

servidor.get("/login", function(req, res){

    res.send("Essa é minha página de login da aplicação.")

})

servidor.listen(8081, function(){
    console.log("Servidor online.");
});