//importe o express 
const express = require ('express');
//importe do arquivo routes.js
const routes = require('./routes');
//instãncia do express
const app = express();

//utiliza JSON como troca de informação
app.use(express.json());
//direciona o aplicativo para o arquivo rotas
app.use(routes);
//aplicativo utiliza a porta 3333
app.listen(3333);