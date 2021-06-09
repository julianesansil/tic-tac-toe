import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ThemeColors } from 'theme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
  selected?: boolean;
  backgroundColor?: ThemeColors;
}

const Button = styled.button<ButtonProps>`
  background-color: ${props =>
    props.theme.colors[
      props.backgroundColor || (props.selected ? 'newGrey' : 'white')
    ]};
  border: none;
  color: ${props =>
    props.selected ? props.theme.colors.white : props.theme.colors.darkGrey};
  cursor: pointer;

  ${props =>
    props.icon
      ? `height: 28px;`
      : `
        height: 32px;
        padding: 0 16px;
        border-radius: 4px;
      `};
`;

export default Button;
