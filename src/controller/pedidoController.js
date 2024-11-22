const { Pedido, Produto, Cliente } = require('../models');

exports.createOrder = async (req, res) => {
  try {
    const { clienteId, itens } = req.body;
    const cliente = await Cliente.findByPk(clienteId);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    const pedido = await Pedido.create({ clienteId });
    for (let item of itens) {
      const produto = await Produto.findByPk(item.produtoId);
      if (!produto || produto.estoque < item.quantidade) {
        return res.status(400).json({ message: 'Produto não disponível em estoque' });
      }
      await pedido.addProduto(produto, { through: { quantidade: item.quantidade } });
      produto.estoque -= item.quantidade;
      await produto.save();
    }

    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const pedido = await Pedido.findByPk(req.params.pedidoId);
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }
    pedido.status = status;
    await pedido.save();
    res.status(200).json(pedido);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      include: [
        { model: Cliente, as: 'cliente' },
        { model: Produto, as: 'produtos' }
      ]
    });
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
