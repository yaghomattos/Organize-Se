//importe express
const express = require('express');

const UserController = require('./controllers/UserController');
const OutlaysController = require('./controllers/OtlaysController');

//instância router do express para controle de rotas
const routes = express.Router();

//rota get para ver todos users
routes.get('/user', UserController.index);
//rota post para criar user
routes.post('/user', UserController.create);

//rota post para criar outlay
routes.post('/outlays', OutlaysController.create);
//rota get para ver todos users
routes.get('/outlays', OutlaysController.index);

//exporta o routes para uso externo
module.exports = routes;