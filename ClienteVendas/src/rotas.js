const express = require("express");
const rotas = express.Router();
const ClienteControler = require("./Controller/ClienteController");
const VendaControler = require("./Controller/VendaController")

rotas.get('/clientes',ClienteControler.read);
rotas.post('/clientes',ClienteControler.create);
rotas.delete('/clientes/:id',ClienteControler.delete);
rotas.post('/clientes/:id',ClienteControler.update);

rotas.get('/vendas',VendaControler.read);
rotas.post('/vendas', VendaControler.create);
rotas.delete('vendas/:id', VendaControler.delete);

module.exports = rotas;