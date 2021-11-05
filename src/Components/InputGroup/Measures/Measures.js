import React, { useState } from 'react';

import './Measures.css';

const Measure1 = (props) => {
  const [altura, setAltura] = useState('');
  const [largura, setLargura] = useState('');
  const [portas, setPortas] = useState('');
  const [janelas, setJanelas] = useState('');

  const { index, element } = props;

  return (
    <div>
      <h2>Medidas da Parede {index + 1}</h2>
      <div className="input-group input-group w-75 p-3">
        <span
          className="input-group-text"
          id="inputGroup-sizing-lg"
        >
          {element.height}
        </span>
        <input
          id={`height-${index + 1}`}
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          min="1"
          max="15"
          value={altura}
          onChange={(e) => setAltura(Number(Number(e.target.value).toFixed(element.toFixed1)))}
          placeholder="0,00"
          required
        />
      </div>
      <div className="input-group input-group w-75 p-3">
        <span
          className="input-group-text"
          id="inputGroup-sizing-lg"
        >
          {element.width}
        </span>
        <input
          id={`width-${index + 1}`}
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          min="1"
          max="15"
          value={largura}
          onChange={(e) => setLargura(Number(Number(e.target.value).toFixed(element.toFixed1)))}
          placeholder={"0,00"}
          required
        />
      </div>
      <div className="input-group input-group w-75 p-3">
        <span
          className="input-group-text"
          id="inputGroup-sizing-lg"
        >
          {element.doors}
        </span>
        <input
          id={`doors-${index + 1}`}
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          min="0"
          value={portas}
          onChange={(e) => setPortas(Number(Number(e.target.value).toFixed(element.toFixed2)))}
          placeholder={"0"}
        />
      </div>
      <div className="input-group input-group w-75 p-3">
        <span
          className="input-group-text"
          id="inputGroup-sizing-lg"
        >
          {element.windows}
        </span>
        <input
          id={`windows-${index + 1}`}
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          min="0"
          value={janelas}
          onChange={(e) => setJanelas(Number(Number(e.target.value).toFixed(element.toFixed2)))}
          placeholder={"0"}
        />
      </div>
    </div>
  )
}

export default Measure1;
