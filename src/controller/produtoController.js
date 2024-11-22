const { Produto } = require('../models');

exports.createProduct = async (req, res) => {
  try {
    const { nome, descricao, preco, estoque } = req.body;
    const produto = await Produto.create({ nome, descricao, preco, estoque });
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.produtoId);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { nome, descricao, preco, estoque } = req.body;
    const produto = await Produto.findByPk(req.params.produtoId);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    produto.nome = nome || produto.nome;
    produto.descricao = descricao || produto.descricao;
    produto.preco = preco || produto.preco;
    produto.estoque = estoque || produto.estoque;
    await produto.save();
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.produtoId);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    await produto.destroy();
    res.status(200).json({ message: 'Produto excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
