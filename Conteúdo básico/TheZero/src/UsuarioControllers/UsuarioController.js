const Usuario = require("../models/UsuarioModel");

module.exports = {
    async read(req, res) {
            const usuarioList = await Usuario.find();
            return res.json(usuarioList);
    },  

    async create(req, res){
        const {nome, usuario, senha, veracidade}= req.body;
        const usuarioCreate = await Usuario.create({
            nome,
            usuario,
            senha,
            veracidade
        });
    return res.json(usuarioCreate);
},

    async delete (req,res){
        const { id } = req.params;
        const usuarioDeleted = await Usuario.findOneAndDelete({ _id:id});

            if(usuarioDeleted){
                return res.json(usuarioDeleted);
            }
        },

    async update (req, res){
        const { id } = req.params;
        const {nome, usuario, senha, veracidade} = req.body;
        const usuarioUpdate = await Usuario.findOne({ _id:id});

            usuarioUpdate.nome = nome;
            usuarioUpdate.usuario = usuario;
            usuarioUpdate.senha = senha
            usuarioUpdate.veracidade = veracidade;

        await usuarioUpdate.save();
    return res.json(usuarioUpdate);
}
    
   
}