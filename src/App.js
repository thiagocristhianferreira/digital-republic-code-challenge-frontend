import React from 'react';

import './App.css';
import {
  Header,
  Instructions,
  InputGroup,
  CalculateButton,
} from './Components';
import toRender from './toRender';

const App = () => (
  <div className="App">
    <Header />
    <Instructions />
    <div className="App-header">
      <InputGroup toRender={ toRender } />
      <CalculateButton />
    </div>
  </div>
);

export default App;
