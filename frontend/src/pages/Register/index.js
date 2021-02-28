import React from 'react';

import './styles.css';

function Register() {
  return(
    <div className="login-container">
      <section className="form">
        <img src="" alt="logo"/>
        <form>
          <h1>azer Cadastro</h1>

          <input placeholder="login"/>
          <input placeholder="senha"/>
          <input placeholder="confirmar senha"/>
          <a className="button register" href="/register">Cadastrar</a>
        </form>
      </section>
    </div>
  );
}

export default Register;