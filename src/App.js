import React, { useState } from 'react';

import './App.css';

const App = () => {
  const [altura, setAltura] = useState('');
  const [largura, setLargura] = useState('');

  return (
    <div className="App">
      <form className="App-header">
        <h2>Medidas da Parede</h2>
        <div className="input-group input-group-lg w-50 p-3">
          <span
            className="input-group-text"
            id="inputGroup-sizing-lg"
          >
            Altura
          </span>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            min="0"
            value={altura}
            onChange={(e) => setAltura(parseFloat(e.target.value).toFixed(2))}
          />
        </div>
        <div className="input-group input-group-lg w-50 p-3">
          <span
            className="input-group-text"
            id="inputGroup-sizing-lg"
          >
            Largura
          </span>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            min="0"
            value={largura}
            onChange={(e) => setLargura(parseFloat(e.target.value).toFixed(2))}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
        >
          Calcular
        </button>
      </form>
    </div>
  );
}

export default App;
