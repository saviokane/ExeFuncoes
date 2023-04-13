const express = require("express");
const rotas = express.Router();
const AnotacaoController = require("./controller/AnotacaoController");

// Seção para definição das rotas de anotações
// rotas.get("/anotacoes", AnotacaoController.read);
rotas.get("/anotacoes", AnotacaoController.read);
rotas.post("/anotacoes", AnotacaoController.create);
rotas.delete("/anotacoes/:id", AnotacaoController.delete);
rotas.post("/anotacoes/id" ,AnotacaoController.update)


module.exports = rotas;

