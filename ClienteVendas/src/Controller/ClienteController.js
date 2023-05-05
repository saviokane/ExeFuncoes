const Cliente = require("../model/ClienteModel");

module.exports = {

    async read (req ,res){
        try{

        
            const clienteList = await Cliente.find();
            return res.json(clienteList);
        }catch (err){
            return res.status(400).send({error: 'Nenhum cliente encontrado'})
        }

    },

    async create (req ,res){

    try{
        const {nome,cpf,email,telefone,fidelidade} = req.body;
        const clienteCreate = await Cliente.create({
            nome,
            cpf,
            email,
            telefone, 
            fidelidade
        });
        return res.json(clienteCreate);
    }catch (err){
        return res.status(400).send({error: 'Error ao criar cliente.'})
    }

    /*{ ESTRUTURA YET ANOTHER REST CLIENT
        "nome":"",
        "cpf":"",
        "email":"@gmail.com",
        "telefone":"(41) 9 ",
        "fidelidade": true
    }*/
    },

    async delete (req ,res){
        try{
        const { id } = req.params;
        const clienteDelete = await Cliente.findOneAndDelete({ _id:id});

        if(clienteDelete){
            return res.json(clienteDelete);
        }
    }catch (err){
        return res.status(400).send({error: 'Usuario não encontrado!!!'})
    }

    },

    async update (req, res){
        try{
        const { id } = req.params;
        const {nome,cpf,email,telefone,fidelidade} = req.body;
        const clienteUpdate = await Cliente.findOne({ _id:id});

            clienteUpdate.nome = nome;
            clienteUpdate.cpf = cpf;
            clienteUpdate.email = email;
            clienteUpdate.telefone = telefone;
            clienteUpdate.fidelidade = fidelidade;

        await clienteUpdate.save();
    return res.json(clienteUpdate);
}catch (err){
    return res.status(400).send({error: 'Alteração não concluida, ID não encontrado.'})
}
}

};


