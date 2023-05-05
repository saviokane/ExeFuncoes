const mongoose = require("mongoose");
//const dbConfig = "mongodb://0.0.0.0:27017/usuarios";
const dbConfig = "mongodb+srv://saviokane:root@cluster0.eh6v9tx.mongodb.net/usuarios?retryWrites=true&w=majority";

const conexao = mongoose.connect(dbConfig,{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

module.exports = conexao;