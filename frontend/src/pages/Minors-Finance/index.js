import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Minors() {
  return(
    <div className="Minors-container">
      <div className="">
        <h1>Finaças Menores</h1>
      
        <div className="finances-review">
          <p>alimentacao</p> 
          <p>aluguel</p> 
          <p>assinaturas</p> 
          <p>economias</p> 
          <p>educacao</p> 
          <p>lazer</p> 
          <p>transporte</p>    
        </div>

        <Link to="/outlays"><button>Gastos</button></Link>
        <Link to="/calc"><button>Investimentos</button></Link>
        <Link to="/perfil"><button>Perfil</button></Link>

      </div>
    </div>
  );
}

export default Minors;