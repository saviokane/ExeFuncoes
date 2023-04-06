const express = require("express");
const rotas = express.Router();
const AnotacaoController = require("./controller/AnotacaoController");

// Seção para definição das rotas de anotações
rotas.get("/anotacoes", AnotacaoController.read);



module.exports = rotas;

