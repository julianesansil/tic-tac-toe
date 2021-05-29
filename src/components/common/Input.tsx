import { CSSProperties } from 'react';
import styled from 'styled-components';

interface InputProps {
  width?: CSSProperties['width'];
}

const Input = styled.input<InputProps>`
  height: 20px;
  width: ${props => props.width};
  border: solid 1px ${props => props.theme.colors.grey};
  font-size: 12px;

  ::placeholder {
    color: ${props => props.theme.colors.grey};
    padding: 10px 4px;
  }
`;

export default Input;
