const mongoose = require("mongoose");
const VendaModelSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
            },
      valor: String,

});

module.exports = mongoose.model("Venda",VendaModelSchema);