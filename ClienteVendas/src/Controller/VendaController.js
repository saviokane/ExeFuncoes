const Venda = require("../model/VendaModel");
const Cliente = require("../model/ClienteModel");

module.exports = {

  async read (req,res){
    try{
      const listarVendas = await Venda.find();
    /**{ ESTRUTURA YET ANOTHER REST CLIENT
    "cliente":"",
    "produto":"",
    "valor":"R$,00"
      }*/
      return res.json(listarVendas);;
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Nenhuma venda encontrada.' });
    }

    },
    
  async create (req, res) {
    try {
      // é necessario fazer um require do cliente e usar na const "clienteEncontrado"
      const { cliente, produto ,valor } = req.body;
      const clienteEncontrado = await Cliente.findById(cliente); // aqui puxa o ID do cliente que vc inseriu via post e retorna via JSON abaixo
      const venda = await Venda.create({ 
            
        cliente: clienteEncontrado._id, // aqui ele buscar todas as informações do cliente encontrado e podemos retornar os dados que referenciamos no MODEL
        cpfCliente: clienteEncontrado.cpf, // assim como aqui retorna o cpf e nome consecutivamente
        nomeCliente: clienteEncontrado.nome, 
        produto,
        valor
          
      });
        return res.json(venda);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'ID do cliente não encontrado.' });
        }
}, 

  async delete (req,res){
    try{
    const { id } = req.params;
    const vendaDeletada = await Venda.findOneAndDelete({_id : id});

  if(vendaDeletada){
    return res.json(vendaDeletada);
  }
}catch (error){
  console.error(error);
  res.status(500).json({message:'Venda não deletada. ID não foi encontrado.'})
}

},

  async update (req,res){
    try{
    const { id } = req.params;
    const {cliente, produto,valor} = req.body;
    const vendaAlterar = await Venda.findOne({_id:id});

      vendaAlterar.cliente = cliente;
      vendaAlterar.produto = produto;
      vendaAlterar.valor = valor;

      await vendaAlterar.save();
      return res.json(vendaAlterar);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Alteração não concluida, ID não encontrado.' });
    }


}
}