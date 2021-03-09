import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


import './styles.css';

function Perfil() {
  const [name]= useState('');
  const [email] = useState('');
  const user_id = localStorage.getItem('id');
  const password = localStorage.getItem('password');

  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    
    history.push('/');
  }
  
  async function info() {
    try {
      const response = await api.post('sessions', { user_id });

      localStorage.setItem('name', response.data.name);
      localStorage.setItem('email', response.data.email);

    } catch(err) {
      alert('Erro na recuperação da data');
    }
  }

  return(
    <div className="container">
      <section className="form">
        <img src="./perfil.jpg" alt="foto perfil"/>
        <section onLoad={ info } className = 'dadosPerfil'>
          <p>Nome: { name } </p>
          <p>Email: { email } </p>
          <p>Senha: { password } </p>
        </section>
        <Link className = 'linksAltera' to="/prompt altera email">Alterar email</Link>
        <Link className = 'linksAltera' to="/prompt altera senha">Alterar senha</Link>

        <Link to="/minors">
          <button className="back">voltar</button>
        </Link>

        <button onClick={handleLogout}>Logout</button>
      </section>
    </div>
  );
}

export default Perfil;