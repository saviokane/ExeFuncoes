const mongoose = require("mongoose");

const UsuariosModelSchema = new mongoose.Schema({
    nome: String,
    usuario: String,
    senha: String,
    veracidade: Boolean

});

module.exports = mongoose.model("Usuario", UsuariosModelSchema);