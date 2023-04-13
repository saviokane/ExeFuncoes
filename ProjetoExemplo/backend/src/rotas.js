const express = require("express");
const rotas = express.Router();
const AnotacaoController = require("./controller/AnotacaoController");

// Seção para definição das rotas de anotações
// rotas.get("/anotacoes", AnotacaoController.read);
rotas.get("/anotacoes", AnotacaoController.read);
rotas.post("/anotacoes", AnotacaoController.create);
rotas.delete("/anotacoes/_id", AnotacaoController.delete);


module.exports = rotas;

