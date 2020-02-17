let produtos = require('../produtos');
let ProdutoController = {
  listarProdutos: (req, res) => {
    res.send(produtos);
  }
};

module.exports = ProdutoController;