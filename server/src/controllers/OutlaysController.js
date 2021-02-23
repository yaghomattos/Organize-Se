//importe da conexão com o banco de dados
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1} = request.query;
    //total de outlays
    const [count] = await connection('outlays').count();

    const outlays = await connection('outlays')
      .limit(5) //limita a exibição até 5 outlays por página
      .offset((page - 1) * 5)
      .select('*');

    response.header('X-Total-Count', count['count(*)']);
  
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
  },

  async delete(request, response) {
    const { id } = request.params;
    const user_id = request.headers.authorization;

    const outlay = await connection('outlays')
      .where('id', id)
      .select('user_id')
      .first();

    //verifica se o usuário esta tentando deletar um outlay que não seja dele mesmo
    if(outlay.user_id !== user_id) {
      return response.status(401).json({ error:'Operation not permitted.' });
    }

    await connection('outlays').where('id', id).delete();
    //retorna uma reposta ok vazia
    return response.status(204).send();
  }
};