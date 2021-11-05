import React from 'react';
import Measures from './Measures/Measures';

const InputGroup = (props) => {

  const { toRender } = props;

  return toRender.map((element, index) => (
      <section>
        <Measures element={element} index={index} />
      </section>
    )
  )
}

export default InputGroup;
