const mongoose = require("mongoose");
const dbConfig = "mongodb://localhost:27071";

const conexao = mongoose.connect(dbConfig,{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

module.exports = conexao;