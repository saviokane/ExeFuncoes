const Venda = require("../model/VendaModel");

module.exports = {

    async read (req,res){
        const listarVendas = await Venda.find();
        return res.json(listarVendas);
    },
    async create (req,res){
    
    const { clienteId, valor } = req.body;
    const venda = await Venda.create({
      cliente: clienteId,
      valor,
    });
    return res.json(venda);
  }
}