var usersList = require('../usuarios');
UserController = {
  //Rota para listagem de um usuario específico ao adicionar um ? após o id o parametro torna se opcional exemplo: '/users/:id?'
  selecionarUsuario: (req, res) => {
    let { id } = req.params;
    let user = usersList.find(user => user.id == id);
    //Verificar se existe o usuário com o código informado 
    if (user == undefined || user == null || user == '') {
      res.send('Usuário não existe');
    } else {
      res.send(user);
    }
  },

  //Rota para listagem de todos os usuarios 
  listarUsuarios: (req, res) => {
    res.send(usersList);
  }
};

module.exports = UserController;
