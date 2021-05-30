import React from 'react';
import styled from 'styled-components';

import XIcon from 'assets/images/X_dark.svg';
import OIcon from 'assets/images/O_dark.svg';
import ValueOption from './types';

interface SquareProps {
  value: ValueOption;
  disabled?: boolean;
  onClick: () => void;
}

export const Container = styled.button`
  width: 50px;
  height: 50px;
`;

const Square = (props: SquareProps): React.ReactElement => {
  const { value, disabled, onClick } = props;

  return (
    <Container disabled={disabled} onClick={onClick}>
      {value === ValueOption.X && <img src={XIcon} alt="X" />}
      {value === ValueOption.O && <img src={OIcon} alt="O" />}
    </Container>
  );
};

export default Square;
