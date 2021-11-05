import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Instructions from './Components/Instructions/Instructions';
import InputGroup from './Components/InputGroup/InputGroup';
import CalculateButton from './Components/CalculateButton/CalculateButton';

const App = () => {
  const toRender = [
    {
      height: 'Altura', width:'Largura',
      doors: 'Quantidade de Portas',
      windows: 'Quantidade de Janelas',
      toFixed1: 2, toFixed2: 0,
      placeholder1: '0,00', placeholder2: '0'
    },
    {
      height: 'Altura', width:'Largura',
      doors: 'Quantidade de Portas',
      windows: 'Quantidade de Janelas',
      toFixed1: 2, toFixed2: 0,
      placeholder1: '0,00', placeholder2: '0'
    },
    {
      height: "Altura", width:'Largura',
      doors: 'Quantidade de Portas',
      windows: 'Quantidade de Janelas',
      toFixed1: 2, toFixed2: 0,
      placeholder1: '0,00', placeholder2: '0'
    },
    {
      height: "Altura", width:'Largura',
      doors: 'Quantidade de Portas',
      windows: 'Quantidade de Janelas',
      toFixed1: 2, toFixed2: 0,
      placeholder1: '0,00', placeholder2: '0'
    },
  ];

  return (
    <div className="App">
      <Header />
      <Instructions />
      <div className="App-header">
        <InputGroup toRender={toRender} />
        <CalculateButton />
      </div>
    </div>
  );
}

export default App;
