const express = require("express");
const rotas = express.Router();
const PessoaController = require("./controller/PessoaController");

rotas.get('/pessoas', PessoaController.read);
rotas.post('/pessoas', PessoaController.create);

module.exports = rotas;