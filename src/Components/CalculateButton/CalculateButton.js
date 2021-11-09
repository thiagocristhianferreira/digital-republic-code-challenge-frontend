import React, { useState } from 'react';

import './CalculateButton.css';
import {
  inputMap,
  inkCalculate,
} from '../../Functions/Functions';

const CalculateButton = () => {
  const [ink, setInk] = useState([]);
  const [show, setShow] = useState(true);

  const calculate = () => {
    inputMap();
    setInk(inkCalculate());
    setShow(false);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary mb-4"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={ () => calculate() }
      >
        Calcular
      </button>
      <div
        hidden={ show }
      >
        <h3>Resultado calculado com os dados fornecidos:</h3>
        <h3>{`Serão necessários ${ink[4]} L`}</h3>
        <h3>{`${ink[0]} Latas de 0,5 L`}</h3>
        <h3>{`${ink[1]} Latas de 2,5 L`}</h3>
        <h3>{`${ink[2]} Latas de 3,6 L`}</h3>
        <h3>{`${ink[3]} Latas de 18 L`}</h3>
      </div>
    </div>
  );
};

export default CalculateButton;
