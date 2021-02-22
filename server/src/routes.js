//importe express
const express = require('express');
//importe crypto para gerar id's
const crypto = require('crypto');

const connection = require('./database/connection');

//instância router do express para controle de rotas
const routes = express.Router();

//rota get para ver users
routes.get('/user', async(request, response) => {
  const users = await connection('users').select('*');

  return response.json(users);
})

//rota post para user
routes.post('/user', async (request, response) => {
  const { name, email, password } = request.body;

  const id = crypto.randomBytes(4).toString('HEX');

  await connection('users').insert({
    id,
    name,
    email,
    password,
  })

  return response.json({ id });
});

//exporta o routes para uso externo
module.exports = routes;