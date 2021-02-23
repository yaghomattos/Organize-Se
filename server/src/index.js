//importe do express 
const express = require('express');
//importe do cors
const cors = require('cors');
//importe do arquivo routes.js
const routes = require('./routes');

//instância do express
const app = express();

//comunicação com o frontend
app.use(cors());
//utiliza JSON como troca de informação
app.use(express.json());
//direciona o aplicativo para o arquivo rotas
app.use(routes);
//aplicativo utiliza a porta 3333
app.listen(3333);