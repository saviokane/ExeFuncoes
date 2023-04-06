const Anotacoes = require("../models/AnotacaoModel");
module.exports = {
    async read(req, res){
        const anotacoesList = await Anotacoes.find();
        return res.json(anotacoesList);
    }
}