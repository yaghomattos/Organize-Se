import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

function Outlays() {
  const [outlays, setOutlays] = useState([]);

  const user_id = localStorage.getItem('id');

  useEffect(() => {
    api.get('outlays', {
      headers: {
        Authorization: user_id,
      }
    }).then(response => {
      setOutlays(response.data);
    }) 
  }, [user_id]);

  async function handleDeleteOutlay(id) {
    try {
      await api.delete(`outlays/${id}`, {
        headers: {
          Authorization: user_id,
        } 
      })

      setOutlays(outlays.filter(outlay => outlay.id !== id));
    } catch(error) {
      alert('Error ao deletar outlay');
    }
  }

  return(
    <div className="outlays-container">
      <div className="outlays-list">
        <ul className = "listaGastos">
          {outlays.map(outlay => (
            <li key={outlay.id}>
              <strong>Custo:</strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
              .format(outlay.value)}</p>

              <strong>Nome da despesa:</strong>
              <p>{outlay.name}</p>

              <strong>Categoria:</strong>
              <p>{outlay.type}</p>

              <button onClick={() => handleDeleteOutlay(outlay.id)} type="button" className = "buttonExcluir">Excluir</button>
            </li>
        ))}
        </ul>
      </div>

      <div className="links">
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