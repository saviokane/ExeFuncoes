const mongoose = require("mongoose");
const VendaModelSchema = new mongoose.Schema({

    cliente: {
        type: mongoose.Schema.Types.ObjectId, // ou Types.String
        ref: 'Cliente'
            },

    cpfCliente:{ 
    type: mongoose.Schema.Types.String,
    ref: 'Cliente'},

    nomeCliente:{ 
        type: mongoose.Schema.Types.String,
        ref: 'Cliente'},

    produto: String,

    valor: String

});

module.exports = mongoose.model("Venda",VendaModelSchema);