import React, { useState } from 'react';
import { Link, useHistory}  from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { login, password });

      localStorage.setItem('login', login);
      localStorage.setItem('password', password);
      localStorage.setItem('id', response.data.user_id);

      history.push('/minors');

    } catch(error) {
      alert('Login ou senha incorretos');
    }
  }  

  return(
    <div className="container">
      <section className="form">
        <img src="" alt="logo"/>
        <form onSubmit={ handleLogin }>
          <h1>Faça login</h1>

          <input 
            placeholder="login" 
            value={ login } 
            onChange={ e => setLogin(e.target.value) } 
          />

          <input 
            placeholder="senha"
            value={ password }
            onChange={ e => setPassword(e.target.value) }
          />

          <button  type="submit">Entrar</button>

          <Link to="/register" className="register">Registrar</Link>

        </form>
      </section>
    </div>
  );
}

export default Login;