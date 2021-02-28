import React from 'react';

import './styles.css';
import '../Register/index';

function Login() {
  return(
    <div className="login-container">
      <section className="form">
        <img src="" alt="logo"/>
        <form>
          <h1>Fazer login</h1>

          <input placeholder="login"/>
          <input placeholder="senha"/>
          <a className="button singing" href="/singin">Entrar</a>

          <a className="button register" href="/register">Cadastrar</a>
        </form>
      </section>
    </div>
  );
}

export default Login;