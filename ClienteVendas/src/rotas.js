const express = require("express");
const rotas = express.Router();
const ClienteControler = require("./Controller/ClienteController");
const VendaControler = require("./Controller/VendaController")
const FormularioController = require("./Controller/FormularioController");
// Rotas para Cliente
rotas.get('/clientes',ClienteControler.read);
rotas.post('/clientes',ClienteControler.create);
rotas.delete('/clientes/:id',ClienteControler.delete);
rotas.post('/clientes/:id',ClienteControler.update);

// Rotas para Vendas
rotas.get('/vendas',VendaControler.read);
rotas.post('/vendas', VendaControler.create);
rotas.delete('/vendas/:id',VendaControler.delete);
rotas.post('/vendas/:id',VendaControler.update);

// Rotas para conexão back e front
rotas.get('/form', FormularioController.formulario);
rotas.get('/formulario.html', FormularioController.formulario);
rotas.post('/add', FormularioController.register);
rotas.get('/menu',FormularioController.menu);
rotas.get('/menu.html',FormularioController.menu);

rotas.get('/listarClientes.ejs',FormularioController.listClientes);


module.exports = rotas;