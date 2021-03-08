import React from 'react';

import './styles.css';

function Login() {
  return(
    <div className="container">
      <section className="form">
        <img src="" alt="logo"/>
        <form>
          <h1>Faça Login</h1>

          <input placeholder="login"/>
          <input placeholder="senha"/>
          <button  type="submit">Entrar</button>

          <a className="register" href="/register">Cadastrar</a>
        </form>
      </section>
    </div>
  );
}

export default Login;