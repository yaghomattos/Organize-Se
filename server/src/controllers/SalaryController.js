//importe da conexão com o banco de dados
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const user_id = request.headers.authorization;
    const salary = await connection('salary').where('user_id', user_id).select('*');
  
    return response.json(salary);
  },  

  async create(request, response) {
    const { salary, alimentacao, aluguel, assinaturas, economias, educacao, lazer, transporte } = request.body;

    const user_id = request.headers.authorization;

    const [id] = await connection('salary').insert({
      salary,
      alimentacao,
      aluguel,
      assinaturas,
      economias,
      educacao,
      lazer,
      transporte,
      user_id,
    });

    return response.json({ id });
  },

  async edit(request, response) {
    
  }
};