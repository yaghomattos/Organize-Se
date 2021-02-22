//importe da conexão com o banco de dados
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const outlays = await connection('outlays').select('*');
  
    return response.json(outlays);
  },  

  async create(request, response) {
    const { value, name, type } = request.body;
    const user_id = request.headers.authorization;

    const [id] = await connection('outlays').insert({
      value,
      name,
      type,
      user_id,
    });

    return response.json({ id });
  }
};