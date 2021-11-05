import React from 'react';

import './Instructions.css';

const Instructions = () => {
  return (
    <div className="instructions">
      <h2>Instruções</h2>
      <p>Esse programa visa calcular a quantidade de tinta necessária para pintar uma sala.</p>
      <p>Considerando que a sala é composta de 4 paredes, deve-se escolher qual a medida de cada parede e quantas janelas e portas possuem cada parede.</p>
      <p>Com base na quantidade necessária o sistema apontará os tamanhos de lata de tinta que o usuário deve comprar.</p>
    </div>
  )
}

export default Instructions;
