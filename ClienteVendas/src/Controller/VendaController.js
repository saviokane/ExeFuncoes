const Venda = require("../model/VendaModel");
const Cliente = require("../model/ClienteModel");

module.exports = {

  async read (req,res){
      const listarVendas = await Venda.find();
      return res.json(listarVendas);
    /**{
    "cliente":"",
    "produto":"",
    "valor":"R$00"
      }*/


    },
    
  async create (req, res) {
    try {
      const { cliente, produto ,valor } = req.body;
      const clienteEncontrado = await Cliente.findById(cliente);
      const venda = await Venda.create({ 
            
        cliente: clienteEncontrado._id,
        cpfCliente: clienteEncontrado.cpf,
        nomeCliente: clienteEncontrado.nome,
        produto,
        valor
          
      });
        res.status(201).json(venda);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'ID do cliente não encontrado.' });
        }
}, 

  async delete (req,res){
    const { id } = req.params;
    const vendaDeletada = await Venda.findOneAndDelete({_id : id});

  if(vendaDeletada){
    return res.json(vendaDeletada);
  }

},

  async update (req,res){
    const { id } = req.params;
    const {cliente, produto,valor} = req.body;
    const vendaAlterar = await Venda.findOne({_id:id});

      vendaAlterar.cliente = cliente;
      vendaAlterar.produto = produto;
      vendaAlterar.valor = valor;

      await vendaAlterar.save();
    return res.json(vendaAlterar);


}
}