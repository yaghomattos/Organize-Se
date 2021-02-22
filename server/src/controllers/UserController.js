//importe crypto para gerar id's
const crypto = require('crypto');
//importe da conexão com o banco de dados
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const users = await connection('users').select('*');
  
    return response.json(users);
  },  

  async create(request, response) {
    const { name, email, password } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('users').insert({
      id,
      name,
      email,
      password,
    })

    return response.json({ id });
  }
};