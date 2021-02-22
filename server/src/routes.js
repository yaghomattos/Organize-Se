//importe express
const express = require('express');
//instância router do express para controle de rotas
const routes = express.Router();

//rota get
routes.get('/', (request, response) => {
  const data = request.body;

  console.log(data);

  return response.json();
});

//exporta o routes para uso externo
module.exports = routes;