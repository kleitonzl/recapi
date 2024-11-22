const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/clientes', clienteController.createClient);
router.get('/clientes', clienteController.getAllClients);

module.exports = router;
