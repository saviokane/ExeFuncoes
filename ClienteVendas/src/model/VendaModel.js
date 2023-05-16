const mongoose = require("mongoose");
const VendaModelSchema = new mongoose.Schema({

    cliente: {
        // Aqui será inserido o ID de um cliente já existente via POST no YAT 
        type: mongoose.Schema.Types.ObjectId, // ou Types.String
        ref: 'Cliente'
            },

    cpfCliente:{ 
        // Aqui serve somente para retornar via JSON o CPF do cliente referenciado no ID acima.
    type: mongoose.Schema.Types.String,
    ref: 'Cliente'},

    nomeCliente:{ 
         // aqui igualmente, retorna o nome do cliente existente via JSON 
        type: mongoose.Schema.Types.String,
        ref: 'Cliente'},

    produto: String,

    valor: String

});

module.exports = mongoose.model("Venda",VendaModelSchema);