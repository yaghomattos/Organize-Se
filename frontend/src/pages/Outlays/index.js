import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

function Outlays() {
  const [outlays, setOutlays] = useState([]);

  const user_id = localStorage.getItem('id');

  var value = 0;
  var name = 0;
  var type = 0;

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

  function promptSalario() {
    var salary = prompt('Digite seu salário: ');
    sessionStorage.setItem('salary', salary);
  }

  function promptGastos() {
    value = prompt('Valor da despesa: ');
    name = prompt('Nome da empresa: ');
    type = prompt('Despesa fixa ou variavel');
    sessionStorage.setItem('value', value);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('type', type);

    handleSetOutlay();
    window.location.reload(false);
  }

  async function handleSetOutlay() {
    const data = {
      value,
      name,
      type,
      user_id,
    };

    await api.post('outlays', data, {
      headers: {
        Authorization: user_id,
      }
    });
    alert(`Gasto cadastrado`);
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
          <button onClick={ promptSalario }>Alterar salário</button>
          <button onClick={ promptGastos }>Acrescentar gastos fixos</button>
      </div>
      <Link to="/minors">
        <button className="back-outlays">voltar</button>
      </Link>
    </div>
  );
}

export default Outlays;