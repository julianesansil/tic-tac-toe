import { CSSProperties } from 'react';
import styled from 'styled-components';

interface InputProps {
  width?: CSSProperties['width'];
}

const Input = styled.input<InputProps>`
  height: 18px;
  width: ${props => props.width};
  padding: 4px 8px;
  border: solid 1px ${props => props.theme.colors.grey};
  font-size: 13px;

  ::placeholder {
    color: ${props => props.theme.colors.grey};
  }
`;

export default Input;
