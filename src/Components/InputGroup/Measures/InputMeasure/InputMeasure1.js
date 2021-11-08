import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputMeasure1 = (props) => {
  const [altura, setAltura] = useState('');
  const { index, element } = props;
  return (
    <div className="input-group input-group p-3">
      <span
        className="input-group-text"
        id="inputGroup-sizing-lg"
      >
        {element.height}
      </span>
      <input
        id={ `height-${index + 1}` }
        type="number"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        min="1"
        max="15"
        value={ altura }
        onChange={ (e) => setAltura(
          Number(Number(e.target.value).toFixed(Number(element.toFixed1))),
        ) }
        placeholder={ element.placeholder1 }
        required
      />
    </div>
  );
};

InputMeasure1.propTypes = {
  index: PropTypes.number.isRequired,
  element: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default InputMeasure1;
