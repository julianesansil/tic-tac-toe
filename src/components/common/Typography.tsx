import React, { CSSProperties, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ThemeColors, ThemeLineHeight } from 'theme/index';

export interface TypographyProps {
  children: string;

  variant?: keyof typeof VARIANT_MAPPING;
  fontColor?: ThemeColors;
  lineHeight?: ThemeLineHeight;

  fontSize?: CSSProperties['fontSize'];
  fontStyle?: CSSProperties['fontStyle'] | 'bold';
  textAlign?: CSSProperties['textAlign'];
  margin?: { top?: string; bottom?: string; right?: string; left?: string };
}

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

const Typography = (props: TypographyProps): React.ReactElement => {
  const theme = useContext(ThemeContext);
  const {
    children,

    variant = 'body',
    fontColor = 'darkGrey',
    lineHeight = 'body',

    fontSize,
    fontStyle,
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
