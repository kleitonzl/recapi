const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/produtos', produtoController.createProduct);
router.get('/produtos', produtoController.getAllProducts);
router.get('/produtos/:produtoId', produtoController.getProductById);
router.put('/produtos/:produtoId', produtoController.updateProduct);
router.delete('/produtos/:produtoId', produtoController.deleteProduct);

module.exports = router;
