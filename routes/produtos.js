var express = require('express');
var ProdutoController = require('../controllers/ProdutoController');
var router = express.Router();

router.get('/produtos', (req, res, next) => {
  ProdutoController.listarProdutos(req, res);
  next();
});

module.exports = router;
