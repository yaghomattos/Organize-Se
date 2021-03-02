import React from 'react';

import './styles.css';

function Register() {
  return(
    <div className="container">
      <section className="form">
        <img src="" alt="logo"/>
        <h1>Fazer Cadastro</h1>

        <form>
          <input placeholder="login"/>
          <input placeholder="senha"/>
          <input placeholder="confirmar senha"/>
          <button type="submit" >Cadastrar</button>
        </form>
      </section>
    </div>
  );
}

export default Register;