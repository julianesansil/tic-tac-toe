import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ThemeColors } from 'theme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
  selected?: boolean;
  backgroundColor?: ThemeColors;
}

const Button = styled.button<ButtonProps>`
  color: ${props =>
    props.selected ? props.theme.colors.white : props.theme.colors.darkGrey};
  background-color: ${props =>
    props.theme.colors[
      props.backgroundColor || (props.selected ? 'darkGrey' : 'white')
    ]};
  border: none;

  ${props =>
    props.icon
      ? `height: 24px;`
      : `
        height: 32px;
        padding: 0 16px;
        border-radius: 4px;
      `};
`;

export default Button;
