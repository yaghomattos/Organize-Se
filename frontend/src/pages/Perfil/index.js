import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Perfil() {
  return(
    <div className="container">
      <section className="form">
        <img src="" alt="foto perfil"/>
        <section>
          <p>Nome: </p>
          <p>Email: </p>
          <p>Senha: </p>
        </section>
        <Link to="/prompt altera email">Alterar email</Link>
        <Link to="/prompt altera senha">Alterar senha</Link>

        <Link to="/minors">
          <button className="back">voltar</button>
        </Link>
      </section>
    </div>
  );
}

export default Perfil;