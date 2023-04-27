const express = require("express");
const rotas = express.Router();
const ClienteControler = require("./Controller/ClienteController");

rotas.get('/clientes',ClienteControler.read);
rotas.post('/clientes',ClienteControler.create);

module.exports = rotas;