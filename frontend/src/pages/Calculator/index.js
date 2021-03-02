import React from 'react';

import './styles.css';

function Calculator() {
  return(
    <div className="calc-container">
      <div className="review">
        <h1>Especificação do investimento</h1>
        <img src="" alt="grafico"/>
      </div>
      
      <section className="data-calc">
        <form>
          <input placeholder="Tempo de investimento"/>
          <input placeholder="Ivestimento inicial"/>
          <input placeholder="Investimento mensal"/>
          <button type="submit">Calcular</button>
        </form>
      </section>
    </div>
  );
}

export default Calculator;