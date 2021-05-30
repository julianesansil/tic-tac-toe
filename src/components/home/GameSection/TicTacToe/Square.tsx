import React from 'react';
import ValueOption from './types';

interface SquareProps {
  value: ValueOption;
  onClick: () => void;
}

const Square = (props: SquareProps): React.ReactElement => {
  const { value, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      style={{ width: '50px', height: '50px' }}
    >
      {value}
    </button>
  );
};

export default Square;
