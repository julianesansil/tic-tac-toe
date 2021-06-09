import React from 'react';
import styled from 'styled-components';

import XDarkIcon from 'assets/images/X_dark.svg';
import ODarkIcon from 'assets/images/O_dark.svg';
import XBrightIcon from 'assets/images/X_bright.svg';
import OBrightIcon from 'assets/images/O_bright.svg';
import ValueOption from './types';

interface SquareProps {
  value: ValueOption;
  disabled?: boolean;
  isHighlighted?: boolean;
  onClick: () => void;
}

export const Container = styled.button<{ isHighlighted?: boolean }>`
  width: 50px;
  height: 50px;
  background-color: ${props =>
    props.isHighlighted ? props.theme.colors.newGrey : undefined};
`;

const Square = (props: SquareProps): React.ReactElement => {
  const { value, disabled, isHighlighted, onClick } = props;

  return (
    <Container
      isHighlighted={isHighlighted}
      disabled={disabled}
      onClick={onClick}
    >
      {value === ValueOption.X && (
        <img src={isHighlighted ? XBrightIcon : XDarkIcon} alt="X" />
      )}
      {value === ValueOption.O && (
        <img src={isHighlighted ? OBrightIcon : ODarkIcon} alt="O" />
      )}
    </Container>
  );
};

export default Square;
