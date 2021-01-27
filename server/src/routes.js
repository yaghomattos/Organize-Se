//importe express
const express = require('express');
//instância router do express para controle de rotas
const routes = express.Router();

//rota get
routes.get('/', (request, response) => {
  return response.json({
    teste: 'Hello World',
    modelo: 'JSON'
  });
});

//exporta o routes para uso externo
module.exports = routes;