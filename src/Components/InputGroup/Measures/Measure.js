import React from 'react';
import PropTypes from 'prop-types';

import './Measures.css';
import InputMeasure1 from './InputMeasure/InputMeasure1';
import InputMeasure2 from './InputMeasure/InputMeasure2';
import InputMeasure3 from './InputMeasure/InputMeasure3';
import InputMeasure4 from './InputMeasure/InputMeasure4';

const Measure = (props) => {
  const { index, element } = props;
  return (
    <div>
      <h2>{`Medidas da Parede ${index + 1}`}</h2>
      <InputMeasure1 index={ index } element={ element } />
      <InputMeasure2 index={ index } element={ element } />
      <InputMeasure3 index={ index } element={ element } />
      <InputMeasure4 index={ index } element={ element } />
    </div>
  );
};

Measure.propTypes = {
  index: PropTypes.number.isRequired,
  element: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Measure;
