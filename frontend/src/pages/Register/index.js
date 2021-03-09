import React, { useState } from 'react';
import { useHistory}  from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

function Register() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [validate, setValidate] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      login,
      password,
      name,
      email,
    };

    try {
      localStorage.setItem('validate', validate);
      if(verifyPassword()) {
        const response = await api.post('user', data);

        alert(`Cadastro realizado com sucesso: ${response.data.id}`);

        history.push('/');
      }
      else {
        alert('Senhas diferente');
      }  
    } catch(err) {
      alert('Erro no cadastro');
    }
  }

  function verifyPassword() {
    if(validate === password) {
      return true;
    }
  }

  return(
    <div className="container">
      <section className="form">
        <img src="" alt="logo"/>
        <h1>Fazer Cadastro</h1>

        <form onSubmit={ handleRegister }>
          <input 
            placeholder="nome"
            value={ name }
            onChange={ e => setName(e.target.value) }
          />
          <input 
            type="email"
            placeholder="email"
            value={ email }
            onChange={ e => setEmail(e.target.value) }
          />
          <input 
            placeholder="login"
            value={ login }
            onChange={ e => setLogin(e.target.value) }
          />
          <input 
            type="password"
            placeholder="senha"
            value={ password }
            onChange={ e => setPassword(e.target.value) }
          />
          <input 
            type="password"
            placeholder="confirmar senha"
            value={ validate }
            onChange={ e => setValidate(e.target.value) }
          />
          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </div>
  );
}

export default Register;