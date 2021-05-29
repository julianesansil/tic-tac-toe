import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ThemeColors, ThemeLineHeight } from 'theme/index';

const VARIANT_MAPPING = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  title: 'h1',
  subtitle1: 'h2',
  subtitle2: 'h3',
  body: 'p',
};

interface TypographyProps {
  children: string;
  variant?: keyof typeof VARIANT_MAPPING;
  fontColor?: ThemeColors;
  fontSize?: string;
  fontStyle?: 'normal' | 'italic' | 'bold';
  lineHeight?: ThemeLineHeight;
  textAlign?: 'start' | 'center' | 'end' | 'justify';
  margin?: { top?: string; bottom?: string; right?: string; left?: string };
}

const Typography: React.FC<TypographyProps> = props => {
  const theme = useContext(ThemeContext);
  const {
    children,
    variant = 'body',
    fontColor = 'darkGrey',
    fontSize,
    fontStyle = 'normal',
    lineHeight = 'body',
    textAlign,
    margin,
  } = props;

  const style = {
    fontSize,
    textAlign,
    color: theme.colors[fontColor],
    lineHeight: theme.lineHeight[lineHeight],
    ...(fontStyle === 'bold' && { fontWeight: 'bold' }),
    ...(fontStyle === 'italic' && { fontStyle: 'italic' }),
    ...(margin && {
      margin: `${margin.top || 0} ${margin.right || 0} ${margin.bottom || 0} ${
        margin.left || 0
      }`,
    }),
  };

  return React.createElement(VARIANT_MAPPING[variant], { style }, children);
};

export default Typography;
