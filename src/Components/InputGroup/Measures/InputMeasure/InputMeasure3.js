import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputMeasure3 = (props) => {
  const [parametro, setParametro] = useState('');
  const { index, element } = props;
  return (
    <div className="input-group input-group p-3">
      <span
        className="input-group-text"
        id="inputGroup-sizing-lg"
      >
        {element.doors}
      </span>
      <input
        id={ `doors-${index + 1}` }
        type="number"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        min="1"
        max="15"
        value={ parametro }
        onChange={ (e) => setParametro(
          Number(Number(e.target.value).toFixed(Number(element.toFixed2))),
        ) }
        placeholder={ element.placeholder2 }
        required
      />
    </div>
  );
};

InputMeasure3.propTypes = {
  index: PropTypes.number.isRequired,
  element: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default InputMeasure3;
