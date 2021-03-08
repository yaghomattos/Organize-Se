import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Outlays() {
  return(
    <div className="outlays-container">
      <div className="outlays-list">
        <ul>
          <li>
            <strong>Custo:</strong>
            <p>R$20,00</p>

            <strong>Nome da despesa:</strong>
            <p>luz</p>

            <strong>Categoria:</strong>
            <p>fixo</p>

            <button>Excluir</button>
          </li>

          <li>
            <strong>Custo:</strong>
            <p>R$20,00</p>

            <strong>Nome da despesa:</strong>
            <p>luz</p>

            <strong>Categoria:</strong>
            <p>fixo</p>

            <button>Excluir</button>
          </li>

          <li>
            <strong>Custo:</strong>
            <p>R$20,00</p>

            <strong>Nome da despesa:</strong>
            <p>luz</p>

            <strong>Categoria:</strong>
            <p>fixo</p>

            <button>Excluir</button>
          </li>

          <li>
            <strong>Custo:</strong>
            <p>R$20,00</p>

            <strong>Nome da despesa:</strong>
            <p>luz</p>

            <strong>Categoria:</strong>
            <p>fixo</p>

            <button>Excluir</button>
          </li>
        </ul>
      </div>

      <div className="teste">
        <Link to="/prompt editar salario">
          <button>Alterar salário</button>
        </Link>
        <Link to="/prompt editar gastos">
          <button>Editar gastos fixos</button>
        </Link>
      </div>
      
    </div>
  );
}

export default Outlays;