const express = require("express");
const rotas = express.Router();
const ClienteControler = require("./Controller/ClienteController");
const VendaControler = require("./Controller/VendaController")
const FormularioController = require("./Controller/FormularioController");

rotas.get('/clientes',ClienteControler.read);
rotas.post('/clientes',ClienteControler.create);
rotas.delete('/clientes/:id',ClienteControler.delete);
rotas.post('/clientes/:id',ClienteControler.update);

rotas.get('/vendas',VendaControler.read);
rotas.post('/vendas', VendaControler.create);
rotas.delete('/vendas/:id',VendaControler.delete);
rotas.post('/vendas/:id',VendaControler.update);

// tentativa de criar menu || rotas.get('/home', FormularioController.home);
rotas.get('/form', FormularioController.formulario);
rotas.get('/formulario.html', FormularioController.formulario);
rotas.post('/add', FormularioController.register);
rotas.get('/menu',FormularioController.menu);
rotas.get('/listar',FormularioController.listClients);
// tentativa de leitura BD || rotas.get('/ler',FormularioController.read);

module.exports = rotas;