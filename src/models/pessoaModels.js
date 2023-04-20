const mongoose = require("mongoose");

const PessoasModelsSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    idade: String,
    altura: String,
    apto: Boolean
});

module.exports = mongoose.model("Pessoa", PessoasModelsSchema);