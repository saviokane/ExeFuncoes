const Cliente = require("../model/ClienteModelSchema");

module.exports = {

    async read (req,res){
            const clienteList = await Cliente.find();
            return res.json(clienteList);
    },

    async create (req,res){
        const {nome,cpf,email,fidelidade} = req.body;
        const clienteCreate = await Cliente.create({
            nome,
            cpf,
            email,
            telefone, 
            fidelidade
        });
        return res.json(clienteCreate);
    }



}