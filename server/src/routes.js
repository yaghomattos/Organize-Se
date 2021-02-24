//importe express
const express = require('express');

const UserController = require('./controllers/UserController');
const OutlaysController = require('./controllers/OutlaysController');
const SessionController = require('./controllers/SessionController');
const SalaryController = require('./controllers/SalaryController');

//instância router do express para controle de rotas
const routes = express.Router();

//rota de login
routes.post('/sessions', SessionController.create);

//rota get para ver todos users -> desenvolvimento apenas
routes.get('/user', UserController.index);
//rota post para criar user
routes.post('/user', UserController.create);

//rota post para criar salário e despesas menores
routes.post('/salary', SalaryController.create);
//rota get para vizualizar salário e despesas menores
routes.get('/salary', SalaryController.index);

//rota post para criar outlay
routes.post('/outlays', OutlaysController.create);
//rota get listar todos outlays
routes.get('/outlays', OutlaysController.index);
//rota put para deletar outlay
routes.delete('/outlays/:id', OutlaysController.delete);

//exporta o routes para uso externo
module.exports = routes;