const Pessoa = require("../models/pessoaModels");

    module.exports = {
    async read(req ,res){
        const PessoaList = await Pessoa.find();
        return res.json(PessoaList);
    },

    async create(req , res){
        const {nome, cpf, idade,altura, apto} = req.body;
        const PessoaCreate = await Pessoa.create({
            nome,
            cpf,
            idade,
            altura,
            apto
        });
        return res.json(PessoaCreate);
    },
}