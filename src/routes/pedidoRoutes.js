const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.post('/pedidos', pedidoController.createOrder);
router.get('/pedidos', pedidoController.getAllOrders);
router.put('/pedidos/:pedidoId/status', pedidoController.updateOrder)
