const Anotacoes = require("../models/AnotacaoModel");
module.exports = {
    async read(req, res){
        const anotacoesList = await Anotacoes.find();
        return res.json(anotacoesList);
    },
    async create(req, res){
        const {titulo, notas, prioridade} = req.body;
        if(!titulo || !notas){
            return res.status(400).json({error:"É necessario preencher um titulo e uma anotacao."});
        }
        const AnotacaoCriada = await Anotacoes.create({
            titulo,
            notas,
            prioridade
        });
        return res.json(AnotacaoCriada);
            
    },

    async delete (req,res){
        const { id } = req.params;
        const anotacaoDeletadas = await Anotacoes.findOneAndDelete({ _id: id});
        if(anotacaoDeletadas){
            return res.json(anotacaoDeletadas);
        }
    }
}