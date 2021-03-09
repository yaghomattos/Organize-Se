import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';

import './styles.css';

function Minors() {
  return(
    <div className="Minors-container">
      <div className="">
        <h1>Finaças Menores</h1>
        <PieChart id="grafico"
          label={({ dataEntry }) => dataEntry.title}
          labelStyle = {{fontSize: '4px'}}
          data={[
            { title: 'Alimentação', value: 7, color: '#E38627' },
            { title: 'Aluguel', value: 5, color: '#C13C37' },
            { title: 'Assinaturas', value: 10, color: '#6A2135' },
            { title: 'Economias', value: 4, color: '#008000' },
            { title: 'Educação', value: 6, color: '#FFFAFA' },
            { title: 'Lazer', value: 5, color: '#FFFF00' },
            { title: 'Transporte', value: 10, color: '#E0FFFF' },
          ]}
        />        

        <Link to="/outlays"><button>Gastos</button></Link>
        <Link to="/calc"><button>Investimentos</button></Link>
        <Link to="/perfil"><button>Perfil</button></Link>

      </div>
    </div>
  );
}

export default Minors;