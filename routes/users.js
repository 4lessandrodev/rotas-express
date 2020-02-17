var express = require('express');
var UserController = require('../controllers/UserController');
var router = express.Router();

router.get('/users/:id', (req, res, next) => {
  UserController.selecionarUsuario(req, res);
  next();
});


router.get('/users', (req, res, next) => {
  UserController.listarUsuarios(req, res);
  next();
});

module.exports = router;