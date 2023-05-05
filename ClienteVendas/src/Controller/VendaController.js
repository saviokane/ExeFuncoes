const Venda = require("../model/VendaModel");
const Cliente = require("../model/ClienteModel");

module.exports = {

    async read (req,res){
        const listarVendas = await Venda.find();
        return res.json(listarVendas);
    },
    
    async create (req, res) {
        try {
          const { cliente, produto ,valor } = req.body;
          const clienteEncontrado = await Cliente.findById(cliente);
          const venda = await Venda.create({ 
            
            cliente: clienteEncontrado._id,
            produto,
            valor

      });
            res.status(201).json(venda);
            } catch (error) {
                console.error(error);
              res.status(500).json({ message: 'Erro ao criar venda.' });
  }
}, 

async delete (req,res){

  const { id } = req.params;
  const vendaDeletada = await Venda.findOneAndDelete({_id : id});
  if(vendaDeletada){
    return res.json(vendaDeletada);
  }

}
}