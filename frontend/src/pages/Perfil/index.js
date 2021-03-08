import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Perfil() {
  return(
    <div className="container">
      <section className="form">
        <img src="./perfil.jpg" alt="foto perfil"/>
        <section className = 'dadosPerfil'>
          <p>Nome: Fulano</p>
          <p>Email: fulano@gmail.com</p>
          <p>Senha: 1234</p>
        </section>
        <Link className = 'linksAltera' to="/prompt altera email">Alterar email</Link>
        <Link className = 'linksAltera' to="/prompt altera senha">Alterar senha</Link>

        <Link to="/minors">
          <button className="back">voltar</button>
        </Link>
      </section>
    </div>
  );
}

export default Perfil;