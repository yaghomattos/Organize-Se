//importe express
const express = require('express');

const UserController = require('./controllers/UserController');
const OutlaysController = require('./controllers/OutlaysController');

//instância router do express para controle de rotas
const routes = express.Router();

//rota get para ver todos users -> desenvolvimento apenas
routes.get('/user', UserController.index);
//rota post para criar user
routes.post('/user', UserController.create);

//rota post para criar outlay
routes.post('/outlays', OutlaysController.create);
//rota get listar todos outlays
routes.get('/outlays', OutlaysController.index);
//rota put para deletar outlay
routes.delete('/outlays/:id', OutlaysController.delete);

//exporta o routes para uso externo
module.exports = routes;