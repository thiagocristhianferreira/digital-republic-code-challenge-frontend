import React from 'react';

import './Instructions.css';

const Instructions = () => (
  <div className="instructions">
    <h2>Instruções</h2>
    <p>Esse programa visa calcular a quantidade de tinta</p>
    <p>necessária para pintar uma sala.</p>
    <p>Considerando que a sala é composta de 4 paredes,</p>
    <p>deve-se escolher qual a medida de cada parede e quantas</p>
    <p>janelas e portas possuem cada parede.</p>
    <p>Com base na quantidade necessária o sistema apontará os</p>
    <p>tamanhos de lata de tinta que o usuário deve comprar.</p>
  </div>
);

export default Instructions;
