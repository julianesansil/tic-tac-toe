import React from 'react';
import styled from 'styled-components';

import XDarkIcon from 'assets/images/X_dark.svg';
import ODarkIcon from 'assets/images/O_dark.svg';
import XBrightIcon from 'assets/images/X_bright.svg';
import OBrightIcon from 'assets/images/O_bright.svg';
import ValueOption from './types';

interface SquareProps {
  value: ValueOption;
  isSquareHighlighted?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const Container = styled.button<{ isSquareHighlighted?: boolean }>`
  width: 50px;
  height: 50px;

  background-color: ${props =>
    props.isSquareHighlighted ? props.theme.colors.darkGrey : undefined};
`;

const Square = (props: SquareProps): React.ReactElement => {
  const { value, isSquareHighlighted, disabled, onClick } = props;

  return (
    <Container
      isSquareHighlighted={isSquareHighlighted}
      disabled={disabled}
      onClick={onClick}
    >
      {value === ValueOption.X && (
        <img src={isSquareHighlighted ? XBrightIcon : XDarkIcon} alt="X" />
      )}
      {value === ValueOption.O && (
        <img src={isSquareHighlighted ? OBrightIcon : ODarkIcon} alt="O" />
      )}
    </Container>
  );
};

export default Square;
