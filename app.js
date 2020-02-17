var express = require('express');
const app = express();
const port = 3000;
const hostname = 'localhost';
var userRouter = require('./routes/users');
var produtoRouter = require('./routes/produtos');

const callback = () => {
  console.log(`Servidor rodando na porta ${port}`);
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', userRouter);
app.use('/', produtoRouter);


app.listen(port, hostname, callback());

module.exports = app;