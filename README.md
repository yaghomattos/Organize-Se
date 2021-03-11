# Descrição

## ❕ Projeto

Organize-se é uma aplicação que visa ajudar pessoas com a visualização de suas finanças e investimentos.

## 💻 Tecnologias e ferramentas de desenvolvimento:

Tecnologias utilizadas tecnologias:
- [Node.js](https://nodejs.org/en/) 
- [React](https://reactjs.org)

Frontend:
- [react-router-dom](https://reactrouter.com/) -> Biblioteca para gerenciamento de rotas
- [axios](https://github.com/axios/axios) -> Biblioteca para tratamento das promises, fazendo a conexão entre o brownser e o servidor.
- [normalize css](https://github.com/necolas/normalize.css/) -> Reseta o css

Backend:
- [sqlite3](https://www.sqlite.org/index.html) -> Banco de dados
- [express](https://expressjs.com/) -> Framework base para o Node.js
- [knex](http://knexjs.org/) -> QueryBuilder para SQL 
- [nodemon](https://nodemon.io/) -> Ferramenta que atualiza automaticamente a aplicação quando são salva as alterações.
- [cors](https://www.npmjs.com/package/cors) -> Conecta com o Express para tratamento de headers do http verificando quais recursos podem ser acessados.


## 📋 Como usar

Necessário ter instalado em sua máquina [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) + [Npm](https://www.npmjs.com/get-npm).

### Utilize os seguintes comandos:
```bash
# Fazer um clone desse repositório
$ git clone https://github.com/YaghoMattos/Organize-Se

# Acessar o repositório do backend
$ cd Organize-Se/server

# Acessar o repositório do frontend
$ cd Organize-Se/frontend

# Instalar as dependências
$ npm install

# Rodar as Migrações
$ npm knex migrate:latest 

# Rodar a API
$ npm start

# Rodar o Frontend
$ npm start
```