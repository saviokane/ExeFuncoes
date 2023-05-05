const express = require("express");
const rotas = express.Router();
const UsuarioController = require("./UsuarioControllers/UsuarioController");

rotas.get('/usuario', UsuarioController.read);
rotas.post('/usuario',UsuarioController.create);
rotas.delete('/usuario/:id',UsuarioController.delete);
rotas.post('/usuario:id', UsuarioController.update);

module.exports = rotas;