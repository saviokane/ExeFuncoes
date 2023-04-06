const Anotacoes = require("../models/AnotacaoModel");
module.exports = {
    async read(req, res){
        const anotacoesList = await Anotacoes.find();
        return res.json(anotacoesList);
    },
    async create(req, res){
        const {titulo, notas, prioridade} = req.body;
        const AnotacaoCriada = await Anotacoes.create({
            titulo,
            notas,
            prioridade
        });
        return res.json(AnotacaoCriada);
            
    }
}