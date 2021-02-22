//importe express
const express = require('express');

const UserController = require('./controller/UserController');

//instância router do express para controle de rotas
const routes = express.Router();

//rota get para ver todos users
routes.get('/user', UserController.index);
//rota post para criar user
routes.post('/user', UserController.create);

//exporta o routes para uso externo
module.exports = routes;