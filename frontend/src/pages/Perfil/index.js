import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import perfil from '../../assets/perfil.png';

import './styles.css';

function Perfil() {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');

  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    
    history.push('/');
  }

  return(
    <div className="container">
      <section className="form">
        <img src={ perfil } alt="foto perfil"/>
        <section className = 'dadosPerfil'>
          <p>Nome: { name } </p>
          <p>Email: { email } </p>
          <p>Senha: { password } </p>
        </section>
        <Link className = 'linksAltera' to="/prompt altera email">Alterar email</Link>
        <Link className = 'linksAltera' to="/prompt altera senha">Alterar senha</Link>

        <Link to="/minors">
          <button className="back">voltar</button>
        </Link>

        <button onClick={handleLogout} className="logout">Logout</button>
      </section>
    </div>
  );
}

export default Perfil;