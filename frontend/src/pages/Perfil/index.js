import React from 'react';

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
        <button className="back">voltar</button>
      </section>
    </div>
  );
}

export default Perfil;