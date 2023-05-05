const mongoose = require("mongoose");

const ClienteModelSchema = new mongoose.Schema({
    nome : String,
    cpf: String,
    email: String,
    telefone: String,
    fidelidade: Boolean

});


module.exports = mongoose.model('Cliente', ClienteModelSchema);