import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Calculator(e) {
  const [tempo, setTempo] = useState('');
  const [inicial, setInicial] = useState('');
  const [mensal, setMensal] = useState('');
  const [percentual, setPercentual] = useState('');

  async function CalculaInvestimento(e) {
    e.preventDefault();
    document.getElementById('resultado').innerHTML = ''
    var result = Number(inicial) + (Number(mensal) + Number((percentual/100))*Number(mensal) )*Number(tempo);

    if(tempo > 1)
      var stringResult = "Ao final do seu investimento você terá R$ " + result + " em: " + tempo + " meses"
    else {
      var stringResult = "Ao final do seu investimento você terá R$ " + result + " em: " + tempo + " mês"
    }      

    document.getElementById('resultado').append(stringResult)
  }

  return(
    <div className="calc-container">
      <div className="review">
        <h1>Especificação do investimento</h1>
        <div id="resultado"></div>
      </div>
      
      <section className="data-calc">
        <form onSubmit={ CalculaInvestimento }>
          <label>meses</label>
          <input type="number" placeholder="Tempo de investimento" onChange={ e => setTempo(e.target.value)}/>
          <label>R$</label>
          <input type="number" placeholder="Investimento inicial" onChange={ e => setInicial(e.target.value)}/>
          <label>R$</label>
          <input type="number" placeholder="Investimento mensal" onChange={ e => setMensal(e.target.value)}/>
          <label>%</label>
          <input type="number" placeholder="Percentual" onChange={ e => setPercentual(e.target.value)}/>
          <button type="submit">Calcular</button>
        </form>
      
        <Link to="/minors">
          <button className="back-calc">voltar</button>
        </Link>
      </section>

    </div>
  );
}

export default Calculator;