const mongoose = require("mongoose");
const AnotacoesModelSchema = new mongoose.Schema({
    titulo: String,
    notas: String,
    prioridade: Boolean
});
module.exports = mongoose.model("Anotacoes", AnotacoesModelSchema);