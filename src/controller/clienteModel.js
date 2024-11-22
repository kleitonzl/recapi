const { Cliente } = require('../models');

exports.createClient = async (req, res) => {
  try {
    const { nome, email, telefone, endereco } = req.body;
    const cliente = await Cliente.create({ nome, email, telefone, endereco });
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllClients = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
