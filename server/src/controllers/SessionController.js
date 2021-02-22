const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { login, password } = request.body;

    const user = await connection('users')
      .where('login', login)
      .where('password', password)
      .select('*')
      .first();

    if(!user) {
      return response.status(400).json({ error: 'Incorrect login or password' })
    }
    
    return response.json(user);
  }
}